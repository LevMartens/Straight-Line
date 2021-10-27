import { checkIfLevel1Exists } from "../resources/aws/dynamo_db/check-if-lvl-1-exists";
import { checkIfLevel2ExistsUnderlvl1 } from "../resources/aws/dynamo_db/check-if-lvl-2-exists-under-lvl-1";
import { checkIfLevel3ExistsUnderlvl2 } from "../resources/aws/dynamo_db/check-if-lvl-3-exists-under-lvl-2";
import { createGraphQLCoordinateType } from "../resources/aws/dynamo_db/create-graphql-coordinates-type";
import { savePluscodeLevel1 } from "../resources/aws/dynamo_db/save-pluscode-lvl-1";
import { savePluscodeLevel2 } from "../resources/aws/dynamo_db/save-pluscode-lvl-2";
import { savePluscodeLevel3 } from "../resources/aws/dynamo_db/save-pluscode-lvl-3";
import { saveLine } from "../resources/aws/dynamo_db/save-line";
import { increaseNumberOfLinesInPluscodeLvl1By } from "../resources/aws/dynamo_db/increase-number-of-lines-in-pluscode-lvl-1-by";
import { increaseNumberOfLinesInPluscodeLvl2By } from "../resources/aws/dynamo_db/increase-number-of-lines-in-pluscode-lvl-2-by";
import { increaseNumberOfLinesInPluscodeLvl3By } from "../resources/aws/dynamo_db/increase-number-of-lines-in-pluscode-lvl-3-by";
import {
  getCoordinesFromPluscode,
  getPluscodeFromCoordinates,
} from "../resources/rest_api/get-pluscode";
import { getDistanceBetween } from "../generators/distance-generator";
import { mapElevationPoints, packLineData } from "../helpers/packers";
import { showAlert } from "../resources/operating_system/alerts";
import { saveLineDraftToDB } from "../resources/aws/dynamo_db/save-line-draft";
import { selectLineDraft } from "../../presentation/state_management/actions/actions";
import Amplify, { Auth, Hub } from "aws-amplify";
import { createGraphQLPathType } from "../resources/aws/dynamo_db/create-graphql-path";
import { saveFinishedMission } from "../resources/aws/dynamo_db/save-finished-mission";

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
    //path: graphqlPathArray,
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
