const Melbourne = {
  latitude: -37.840935,
  longitude: 144.946457,
};

const aSingleCarlton = {
  latitude: -37.794932,
  longitude: 144.973475,
  isLoaded: false,
};

export const locationHandler = (
  state = {
    showHeadingOn: false,
    liveTrackingOn: false,
    userCloseEnoughToStart: false,
    aSingleCurrentPosition: aSingleCarlton,
    watchCurrentPosition: Melbourne,
    direction: 0.0,
    headingWatcher: {
      remove: function () {
        console.log("ERROR: No heading watcher attached");
      },
    },
    positionWatcher: {
      remove: function () {
        console.log("ERROR: No position watcher attached");
      },
    },
  },
  action
) => {
  switch (action.type) {
    case "USER_CLOSE_ENOUGH_TO_START":
      return updateObject(state, { userCloseEnoughToStart: action.event });

    case "SET_POSITION_WATCHER":
      return updateObject(state, { headingWatcher: action.event });

    case "SET_HEADING_WATCHER":
      return updateObject(state, { positionWatcher: action.event });

    case "WATCH_DIRECTION":
      return updateObject(state, { direction: action.newDirection });

    case "GET_CURRENT_POSITION_ONCE":
      return updateObject(state, {
        aSingleCurrentPosition: {
          latitude: action.coordinates.latitude,
          longitude: action.coordinates.longitude,
          isLoaded: true,
        },
      });

    case "WATCH_CURRENT_POSITION":
      return updateObject(state, {
        watchCurrentPosition: action.newCoordinates,
      });

    case "LIVE_TRACKING_ON":
      return updateObject(state, {
        liveTrackingOn: action.event,
      });

    case "SHOW_HEADING_ON":
      return updateObject(state, {
        showHeadingOn: action.event,
      });

    default:
      return state;
  }
};

function updateObject(oldObject, newValues) {
  // Object.assign to ensure data is correctly copied instead of mutated
  return Object.assign({}, oldObject, newValues);
}
