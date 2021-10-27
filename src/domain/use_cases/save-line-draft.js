import { showAlert } from "../resources/operating_system/alerts";
import { saveLineDraftToDB } from "../resources/aws/dynamo_db/save-line-draft";
import { selectLineDraft } from "../../presentation/state_management/actions/actions";
import store from "../../presentation/state_management/store/store";

export async function saveLineDraft(rawLineDraft) {
  const {
    id,
    complete3LevelPluscode,
    startingCoordinates,
    finishCoordinates,
    midLineCoordinates,
    creatorName,
    description,
    difficultyLevel,
    distance,
    elevationPoints,
    hashtags,
    latitudeDeltaFit,
    longitudeDeltaFit,
    lineCompleted,
    title,
    verified,
  } = rawLineDraft;

  const { latitude: startLatitude, longitude: startLongitude } =
    startingCoordinates;
  const { latitude: endLatitude, longitude: endLongitude } = finishCoordinates;
  const { latitude: midLatitude, longitude: midLongitude } = midLineCoordinates;

  const startingPointCoordinatesTypeID = await createGraphQLCoordinateType(
    startLatitude,
    startLongitude
  );
  const endPointCoordinatesTypeID = await createGraphQLCoordinateType(
    endLatitude,
    endLongitude
  );

  const midPointCoordinatesTypeID = await createGraphQLCoordinateType(
    midLatitude,
    midLongitude
  );

  const input = {
    id: id,
    parentId: "NOPARENTID",
    complete3LevelPluscode: complete3LevelPluscode,
    lineDraftsStartingCoordinatesId: startingPointCoordinatesTypeID,
    lineDraftsFinishCoordinatesId: endPointCoordinatesTypeID,
    lineDraftsMidLineCoordinatesId: midPointCoordinatesTypeID,
    creatorName: creatorName,
    description: description,
    difficultyLevel: difficultyLevel,
    distance: distance,
    elevationPoints: elevationPoints,
    hashtags: hashtags,
    latitudeDeltaFit: latitudeDeltaFit,
    longitudeDeltaFit: longitudeDeltaFit,
    lineCompleted: lineCompleted,
    title: title,
    verified: verified,
  };

  const line = await saveLineDraftToDB(input);

  if (line.isNOTSaved) {
    showAlert("Line draft didn't save, Lev sucks");
    console.log(
      "ERROR: Line draft didn't save, data back: " +
        JSON.stringify(line.data) +
        " source: create-line.js 184"
    );
    return;
  }
  const lineDraft = await packLineData(line); //line

  store.dispatch(selectLineDraft(lineDraft));

  return lineDraft; // Return for testing
}
