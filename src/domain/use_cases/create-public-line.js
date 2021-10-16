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
import { saveLineDraft } from "../resources/aws/dynamo_db/save-line-draft";
import { selectLineDraft } from "../../presentation/state_management/actions/actions";
import Amplify, { Auth, Hub } from "aws-amplify";
import { createFinishedMission } from "./create-finished-mission";

export async function createPublicLine(
  lineDraft,
  path,
  time,
  difficulty,
  largestDeviation,
  score,
  band
) {
  const {
    rawLineData: {
      complete3LevelPluscode,
      startingCoordinates,
      finishCoordinates,
      creatorName,
      description,
      difficultyLevel,
      distance,
      elevationPoints,
      hashTags,
      latitudeDeltaFit,
      longitudeDeltaFit,
      lineCompleted,
      title,
      verified,
    },
  } = lineDraft;

  const completePluscode = complete3LevelPluscode;
  const pluscodeLevel1Digits = complete3LevelPluscode.substring(0, 2);
  const pluscodeLevel2Digits = complete3LevelPluscode.substring(2, 4);
  const pluscodeLevel3Digits = complete3LevelPluscode.substring(4, 6);

  const pluscodeLevel1InDB = await checkIfLevel1Exists(pluscodeLevel1Digits);
  let pluscodeLevel1ID = "";

  if (pluscodeLevel1InDB.exists) {
    pluscodeLevel1ID = pluscodeLevel1InDB.id;
    increaseNumberOfLinesInPluscodeLvl1By(
      1,
      pluscodeLevel1InDB.id,
      pluscodeLevel1InDB.numberOfLines
    );
  }

  if (pluscodeLevel1InDB.doesNotExist) {
    const middleCoordinatesL1 = await getCoordinesFromPluscode(
      `${pluscodeLevel1Digits}FFFFFF%2BFF`
    );

    const middleCoordinatesTypeL1ID = await createGraphQLCoordinateType(
      middleCoordinatesL1.lat,
      middleCoordinatesL1.lng
    );

    pluscodeLevel1ID = await savePluscodeLevel1(
      pluscodeLevel1Digits,
      middleCoordinatesTypeL1ID,
      1
    );
  }

  const pluscodeLevel2InDB = pluscodeLevel1InDB.doesNotExist
    ? { doesNotExist: true, exists: false }
    : await checkIfLevel2ExistsUnderlvl1(
        pluscodeLevel1ID,
        pluscodeLevel2Digits
      );

  let pluscodeLevel2ID = "";

  if (pluscodeLevel2InDB.exists) {
    pluscodeLevel2ID = pluscodeLevel2InDB.id;
    increaseNumberOfLinesInPluscodeLvl2By(
      1,
      pluscodeLevel2InDB.id,
      pluscodeLevel2InDB.numberOfLines
    );
  }

  if (pluscodeLevel2InDB.doesNotExist) {
    const middleCoordinatesL2 = await getCoordinesFromPluscode(
      `${pluscodeLevel1Digits}${pluscodeLevel2Digits}FFFF%2BFF`
    );
    const middleCoordinatesTypeL2ID = await createGraphQLCoordinateType(
      middleCoordinatesL2.lat,
      middleCoordinatesL2.lng
    );
    pluscodeLevel2ID = await savePluscodeLevel2(
      pluscodeLevel2Digits,
      middleCoordinatesTypeL2ID,
      1,
      pluscodeLevel1ID,
      completePluscode.substring(0, 4)
    );
  }

  const pluscodeLevel3InDB = pluscodeLevel2InDB.doesNotExist
    ? { doesNotExist: true, exists: false }
    : await checkIfLevel3ExistsUnderlvl2(
        pluscodeLevel2ID,
        pluscodeLevel3Digits
      );

  let pluscodeLevel3ID = "";

  if (pluscodeLevel3InDB.exists) {
    pluscodeLevel3ID = pluscodeLevel3InDB.id;
    increaseNumberOfLinesInPluscodeLvl3By(
      1,
      pluscodeLevel3InDB.id,
      pluscodeLevel3InDB.numberOfLines
    );
  }

  if (pluscodeLevel3InDB.doesNotExist) {
    const middleCoordinatesL3 = await getCoordinesFromPluscode(
      `${pluscodeLevel1Digits}${pluscodeLevel2Digits}${pluscodeLevel3Digits}FF%2BFF`
    );
    const middleCoordinatesTypeL3ID = await createGraphQLCoordinateType(
      middleCoordinatesL3.lat,
      middleCoordinatesL3.lng
    );
    pluscodeLevel3ID = await savePluscodeLevel3(
      pluscodeLevel3Digits,
      middleCoordinatesTypeL3ID,
      1,
      pluscodeLevel2ID,
      completePluscode
    );
  }

  const input = {
    parentId: pluscodeLevel3ID,
    linesPluscodeParentId: pluscodeLevel3ID,
    complete3LevelPluscode: complete3LevelPluscode,
    linesStartingCoordinatesId: startingCoordinates.id,
    linesFinishCoordinatesId: finishCoordinates.id,
    creatorName: creatorName,
    description: description,
    difficultyLevel: difficulty,
    distance: distance,
    elevationPoints: elevationPoints,
    hashTags: hashTags,
    latitudeDeltaFit: latitudeDeltaFit,
    longitudeDeltaFit: longitudeDeltaFit,
    lineCompleted: lineCompleted,
    title: title,
    verified: verified,
  };

  const line = await saveLine(input);

  if (line.isNOTSaved) {
    showAlert("Lines didn't save, Lev sucks");
    console.log(
      "ERROR: Line didn't save, data back: " +
        JSON.stringify(line.data) +
        " source: create-line.js 184"
    );
    return;
  }

  const finishedMission = await createFinishedMission(
    path,
    time,
    largestDeviation,
    score,
    band,
    line.id
  );

  return line; // Return for testing
}

async function getUserName() {
  try {
    const userData = await Auth.currentAuthenticatedUser();
    return userData.username;
  } catch (e) {
    return console.log("WARNING: User not signed in");
  }
}
