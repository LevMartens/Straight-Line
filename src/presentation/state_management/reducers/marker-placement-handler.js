const Melbourne = {
  latitude: -37.840935,
  longitude: 144.946457,
};

const Carlton = {
  latitude: -37.794932,
  longitude: 144.973475,
};

export const markerPlacementHandler = (
  state = {
    onSelected: "READY_TO_SET_MARKER_STARTING_POINT",
    coordinatesStartingPoint: Melbourne,
    coordinatesEndPoint: Carlton,
  },
  action
) => {
  switch (action.type) {
    case "RESET":
      return updateObject(state, {
        onSelected: "READY_TO_SET_MARKER_STARTING_POINT",
      });

    case "READY_TO_SET_MARKER_STARTING_POINT":
      return updateObject(state, { onSelected: action.type });

    case "READY_TO_SET_MARKER_END_POINT":
      return updateObject(state, { onSelected: action.type });

    case "SET_MARKER_STARTING_POINT":
      return updateObject(state, {
        coordinatesStartingPoint: action.newCoordinates,
      });

    case "SET_MARKER_END_POINT":
      return updateObject(state, {
        coordinatesEndPoint: action.newCoordinates,
      });

    default:
      return state;
  }
};

function updateObject(oldObject, newValues) {
  // Object.assign to ensure data is correctly copied instead of mutated
  return Object.assign({}, oldObject, newValues);
}
