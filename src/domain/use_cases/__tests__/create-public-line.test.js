import { createLineDraft } from "../create-line-draft";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsconfig from "../../../../aws-exports";

import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from "../../../resources/environment/dimensions";
import { deleteLines } from "../../../../graphql/mutations";
import { Auth } from "aws-amplify";
import { createPublicLine } from "../create-public-line";
import { getLines } from "../../../../graphql/queries";

Amplify.configure(awsconfig);

jest.useFakeTimers();
jest.setTimeout(50000);

async function signIn() {
  try {
    const user = await Auth.signIn("Kalli-Morton", "kallimorton123");
    return user;
  } catch (error) {
    console.log("error signing in", error);
  }
}

export async function getLine(id) {
  try {
    const response = await API.graphql(
      graphqlOperation(getLines, {
        id: id,
      })
    );

    console.log("TEST: public line: " + JSON.stringify(response));

    return response.data.getLines;
  } catch (err) {
    console.log(
      "WARNING: No public lines found for " +
        id +
        " Err: " +
        JSON.stringify(err)
    );
  }
}

test("create public line", async () => {
  const user = await signIn();

  const Melbourne = {
    latitude: -37.840935,
    longitude: 144.946457,
  };

  const Carlton = {
    latitude: -37.794932,
    longitude: 144.973475,
  };

  const lineDraft = await createLineDraft(Melbourne, Carlton, "Test Title");

  const path = [
    {
      id: "123",
      path: [123.4, -123.4],
      pathColor: "red",
    },
    {
      id: "223",
      path: [223.4, -223.4],
      pathColor: "green",
    },
    {
      id: "323",
      path: [323.4, -323.4],
      pathColor: "blue",
    },
  ];
  const time = "test time";
  const difficulty = "test difficulty";
  const largestDeviation = 4.5;
  const score = 5.5;
  const band = "test band";

  const { id: publicLineId } = await createPublicLine(
    lineDraft,
    path,
    time,
    difficulty,
    largestDeviation,
    score,
    band
  );

  const publicLine = await getLine(publicLineId);

  const {
    id,
    parentId,
    pluscodeParent,
    complete3LevelPluscode,
    startingCoordinates,
    finishCoordinates,
    creatorName,
    description,
    title,
    hashtags,
    difficultyLevel,
    finishedMissions,
  } = publicLine;

  expect(id).toEqual(expect.anything());
  expect(publicLineId).toEqual(expect.anything());
  expect(parentId).toEqual(expect.anything());
  expect(complete3LevelPluscode).toEqual(expect.anything());
  expect(startingCoordinates).toEqual(expect.anything());
  expect(creatorName).toEqual(expect.anything());
  expect(description).toEqual(expect.anything());
  expect(title).toEqual("Test Title");
  expect(difficultyLevel).toEqual(expect.anything());

  API.graphql(
    graphqlOperation(deleteLines, {
      input: { id: id },
    })
  );
});
