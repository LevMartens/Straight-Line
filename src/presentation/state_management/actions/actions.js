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

export const currentPositionUpdate = (event) => {
  return {
    newCoordinates: event,
    type: "WATCHCURRENTPOSITION",
  };
};

export const updateCurrentPositionOnce = (coordinates) => {
  return {
    coordinates: coordinates,
    type: "GETCURRENTPOSITIONONCE",
  };
};

export const updateCurrentDirection = (event) => {
  return {
    newDirection: event,
    type: "WATCHDIRECTION",
  };
};

export const updatePath = (event) => {
  return {
    event: event,
    type: "UPDATEPATH",
  };
};

export const sendLineMarkers = (event) => {
  return {
    lineMarkers: event,
    type: "GETLINEMARKERS",
  };
};

export const openBanner = (event) => {
  return {
    event: event,
    type: "OPENBANNER",
  };
};

export const selectMarker = (event) => {
  return {
    event: event,
    type: "SELECTMARKER",
  };
};

export const resetMarker = (event) => {
  return {
    event: event,
    type: "RESETMARKER",
  };
};

export const selectLineDraft = (event) => {
  return {
    event: event,
    type: "SELECTLINEDRAFT",
  };
};

export const resetLineDraft = (event) => {
  return {
    event: event,
    type: "RESETLINEDRAFT",
  };
};

export const addLineTitle = (event) => {
  return {
    event: event,
    type: "ADDLINETITLE",
  };
};

export const setPositionWatcher = (event) => {
  return {
    event: event,
    type: "SETWATCHER",
  };
};

export const setHeadingWatcher = (event) => {
  return {
    event: event,
    type: "SETHEADINGWATCHER",
  };
};

export const userCloseEnoughToStartUpdate = (event) => {
  return {
    event: event,
    type: "UPDATEUSERTOSTART",
  };
};

export const liveTrackingUpdate = (event) => {
  return {
    event: event,
    type: "LIVEON",
  };
};

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

export const showHeadingOnUpdate = (event) => {
  return {
    event: event,
    type: "SHOWHEADINGON",
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
