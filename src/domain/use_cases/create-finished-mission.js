import { createGraphQLCoordinateType } from "../../resources/aws/dynamo_db/create-graphql-coordinates-type";
import { showAlert } from "../../resources/operating_system/alerts";
import { Auth } from "aws-amplify";
import { createGraphQLPathType } from "../../resources/aws/dynamo_db/create-graphql-path";
import { saveFinishedMission } from "../../resources/aws/dynamo_db/save-finished-mission";

export async function createFinishedMission(
  path,
  time,
  largestDeviation,
  score,
  band,
  lineID
) {
  const graphqlPathArray = await Promise.all(
    path.map(async (x) => {
      const { path, pathColor } = x;
      const pointACoord = await createGraphQLCoordinateType(
        path[0].latitude,
        path[0].longitude
      );
      const pointBCoord = await createGraphQLCoordinateType(
        path[1].latitude,
        path[1].longitude
      );
      const graphQlPath = await createGraphQLPathType(
        pointACoord,
        pointBCoord,
        pathColor
      );
      return graphQlPath;
    })
  );

  const userName = await getUserName();

  const input = {
    user: userName,
    time: time,
    largestDeviation: largestDeviation,
    score: score,
    band: band,
    finishedMissionLineId: lineID,
  };

  const finishedMission = await saveFinishedMission(input);

  if (finishedMission.isNOTSaved) {
    showAlert("Finished Mission didn't save, Lev sucks");
    console.log(
      "ERROR: Finished Mission didn't save, data back: " +
        JSON.stringify(finishedMission) +
        " source: create-finished-mission.js 50"
    );
    return;
  }

  return finishedMission; // Return for testing
}

async function getUserName() {
  try {
    const userData = await Auth.currentAuthenticatedUser();
    return userData.username;
  } catch (e) {
    return console.log("WARNING: User not signed in");
  }
}
