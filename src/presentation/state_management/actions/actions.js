export const setMarkerStartingPoint = (event) => {
  return {
    newCoordinates: event,
    type: "SET_MARKER_STARTING_POINT",
  };
};

export const setMarkerEndPoint = (event) => {
  return {
    newCoordinates: event,
    type: "SET_MARKER_END_POINT",
  };
};

export const readyToSetMarkerStartingPoint = () => {
  return {
    type: "READY_TO_SET_MARKER_STARTING_POINT",
  };
};

export const readyToSetMarkerEndPoint = () => {
  return {
    type: "READY_TO_SET_MARKER_END_POINT",
  };
};

export const resetMarkers = () => {
  return {
    type: "RESET",
  };
};

//________________________________________________

export const setPositionWatcher = (event) => {
  return {
    event: event,
    type: "SET_POSITION_WATCHER",
  };
};

export const setHeadingWatcher = (event) => {
  return {
    event: event,
    type: "SET_HEADING_WATCHER",
  };
};

export const updateCurrentPosition = (event) => {
  return {
    newCoordinates: event,
    type: "WATCH_CURRENT_POSITION",
  };
};

export const updateCurrentPositionOnce = (coordinates) => {
  return {
    coordinates: coordinates,
    type: "GET_CURRENT_POSITION_ONCE",
  };
};

export const updateCurrentDirection = (event) => {
  return {
    newDirection: event,
    type: "WATCH_DIRECTION",
  };
};

export const userCloseEnoughToStartUpdate = (event) => {
  return {
    event: event,
    type: "USER_CLOSE_ENOUGH_TO_START",
  };
};

export const liveTrackingUpdate = (event) => {
  return {
    event: event,
    type: "LIVE_TRACKING_ON",
  };
};

export const showHeadingOnUpdate = (event) => {
  return {
    event: event,
    type: "SHOW_HEADING_ON",
  };
};

//________________________________

export const publicLinesEnvelope = (event) => {
  return {
    publicLines: event,
    type: "PUBLIC_LINES",
  };
};

export const selectPublicLine = (event) => {
  return {
    event: event,
    type: "SELECT_PUBLIC_LINE",
  };
};

export const resetSelectedPublicLine = (event) => {
  return {
    event: event,
    type: "RESET_SELECTED_PUBLIC_LINE",
  };
};

export const selectLineDraft = (event) => {
  return {
    event: event,
    type: "SELECT_LINE_DRAFT",
  };
};

export const resetLineDraft = (event) => {
  return {
    event: event,
    type: "RESET_SELECTED_LINE_DRAFT",
  };
};

export const addLineTitle = (event) => {
  return {
    event: event,
    type: "LINE_TITLE",
  };
};

//________________________________

export const updatePath = (event) => {
  return {
    event: event,
    type: "UPDATEPATH",
  };
};

// export const publicLinesEnvelope = (event) => {
//   return {
//     lineMarkers: event,
//     type: "GETLINEMARKERS",
//   };
// };

export const openBanner = (event) => {
  return {
    event: event,
    type: "OPENBANNER",
  };
};

// export const selectPublicLine = (event) => {
//   return {
//     event: event,
//     type: "SELECTMARKER",
//   };
// };

// export const resetMarker = (event) => {
//   return {
//     event: event,
//     type: "RESETMARKER",
//   };
// };

// export const selectLineDraft = (event) => {
//   return {
//     event: event,
//     type: "SELECTLINEDRAFT",
//   };
// };

// export const resetLineDraft = (event) => {
//   return {
//     event: event,
//     type: "RESETLINEDRAFT",
//   };
// };

// export const addLineTitle = (event) => {
//   return {
//     event: event,
//     type: "ADDLINETITLE",
//   };
// };

export const finishLineUpdate = (event) => {
  return {
    event: event,
    type: "FINISHEDLINE",
  };
};

export const difficultyUpdate = (event) => {
  return {
    event: event,
    type: "DIFFICULTY",
  };
};

export const searchVisibleUpdate = (event) => {
  return {
    event: event,
    type: "SEARCH",
  };
};

export const timeDelayUpdate = (event) => {
  return {
    event: event,
    type: "DELAY",
  };
};

export const searchResultsUpdate = (event) => {
  return {
    event: event,
    type: "SEARCHRESULTS",
  };
};

export const onScreenUpdate = (event) => {
  return {
    event: event,
    type: "ONSCREEN",
  };
};

export const exploreMapViewRefUpdate = (event) => {
  return {
    event: event,
    type: "MAPREFEXPLORE",
  };
};
export const createLineMapViewRefUpdate = (event) => {
  return {
    event: event,
    type: "MAPREFCREATELINE",
  };
};
export const gpsLiveMapViewRefUpdate = (event) => {
  return {
    event: event,
    type: "MAPREFGPSLIVE",
  };
};
export const lineReviewMapViewRefUpdate = (event) => {
  return {
    event: event,
    type: "MAPREFLINEREVIEW",
  };
};

export const recentSearchesUpdate = (event) => {
  return {
    event: event,
    type: "RECENTSEARCH",
  };
};

export const exploreMapTypeUpdate = (event) => {
  return {
    event: event,
    type: "MAPTYPEEXPLORE",
  };
};

export const createLineMapTypeUpdate = (event) => {
  return {
    event: event,
    type: "MAPTYPECREATE",
  };
};

export const gpsLiveMapTypeUpdate = (event) => {
  return {
    event: event,
    type: "MAPTYPEGPS",
  };
};
export const menuVisibleUpdate = (event) => {
  return {
    event: event,
    type: "MENUVISIBLE",
  };
};

export const mapIsLoadedUpdate = (event) => {
  return {
    event: event,
    type: "MAPISLOADED",
  };
};

export const imagesUpdate = (event) => {
  return {
    event: event,
    type: "IMAGES",
  };
};

export const toolbarVisibleUpdate = (event) => {
  return {
    event: event,
    type: "TOOLBAR",
  };
};

export const mapViewRefUpdate = (event) => {
  return {
    event: event,
    type: "MAPREF",
  };
};

export const exploreMapHeadingUpdate = (event) => {
  return {
    event: event,
    type: "MAPHEADINGEXPLORE",
  };
};

export const createMapHeadingUpdate = (event) => {
  return {
    event: event,
    type: "MAPHEADINGCREATE",
  };
};

export const gpsLiveMapHeadingUpdate = (event) => {
  return {
    event: event,
    type: "MAPHEADINGGPS",
  };
};

export const loadingVisibleUpdate = (event) => {
  return {
    event: event,
    type: "LOADINGVISIBLE",
  };
};

export const weatherDataUpdate = (event) => {
  return {
    event: event,
    type: "WEATHERDATA",
  };
};

export const radiusForBoundsUpdate = (event) => {
  return {
    event: event,
    type: "RADIUSFORBOUNDS",
  };
};

export const distanceToEndPointUpdate = (event) => {
  return {
    event: event,
    type: "DISTANCETOENDPOINT",
  };
};

export const currentBandUpdate = (event) => {
  return {
    event: event,
    type: "BAND",
  };
};

export const largestDeviationUpdate = (event) => {
  return {
    event: event,
    type: "DEVIATION",
  };
};

export const userDataUpdate = (event) => {
  return {
    event: event,
    type: "USERDATA",
  };
};
