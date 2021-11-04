export const searchVisibleHandler = (state = false, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.event;
    default:
      return state;
  }
};

export const timeDelayHandler = (state = false, action) => {
  switch (action.type) {
    case "DELAY":
      return action.event;
    default:
      return state;
  }
};

export const searchResultsHandler = (
  state = {
    noTextInput: true,
    resultsFound: false,
    noResults: false,
    data: [],
  },
  action
) => {
  switch (action.type) {
    case "SEARCHRESULTS":
      return action.event;
    default:
      return state;
  }
};

export const onScreenHandler = (state = "no screen", action) => {
  switch (action.type) {
    case "ONSCREEN":
      return action.event;
    default:
      return state;
  }
};
export const mapViewRefHandler = (
  state = {
    noMapViewRef: true,
    ref: null,
  },
  action
) => {
  switch (action.type) {
    case "MAPREF":
      return action.event;
    default:
      return state;
  }
};

export const exploreMapViewRefHandler = (
  state = {
    noMapViewRef: true,
    ref: null,
  },
  action
) => {
  switch (action.type) {
    case "MAPREFEXPLORE":
      return action.event;
    default:
      return state;
  }
};
export const createLineMapViewRefHandler = (
  state = {
    noMapViewRef: true,
    ref: null,
  },
  action
) => {
  switch (action.type) {
    case "MAPREFCREATELINE":
      return action.event;
    default:
      return state;
  }
};
export const gpsLiveMapViewRefHandler = (
  state = {
    noMapViewRef: true,
    ref: null,
  },
  action
) => {
  switch (action.type) {
    case "MAPREFGPSLIVE":
      return action.event;
    default:
      return state;
  }
};
export const lineReviewMapViewRefHandler = (
  state = {
    noMapViewRef: true,
    ref: null,
  },
  action
) => {
  switch (action.type) {
    case "MAPREFLINEREVIEW":
      return action.event;
    default:
      return state;
  }
};

export const recentSearchesHandler = (state = [], action) => {
  switch (action.type) {
    case "RECENTSEARCH":
      return action.event;
    default:
      return state;
  }
};

export const exploreMapTypeHandler = (state = "standard", action) => {
  switch (action.type) {
    case "MAPTYPEEXPLORE":
      return action.event;
    default:
      return state;
  }
};
export const createLineMapTypeHandler = (state = "satellite", action) => {
  switch (action.type) {
    case "MAPTYPECREATE":
      return action.event;
    default:
      return state;
  }
};

export const menuVisibleHandler = (state = true, action) => {
  switch (action.type) {
    case "MENUVISIBLE":
      return action.event;
    default:
      return state;
  }
};

export const showHeadingOnHandler = (state = false, action) => {
  switch (action.type) {
    case "SHOWHEADINGON":
      return action.event;
    default:
      return state;
  }
};

export const mapIsLoadedHandler = (state = false, action) => {
  switch (action.type) {
    case "MAPISLOADED":
      return action.event;
    default:
      return state;
  }
};

export const imagesHandler = (state = [], action) => {
  switch (action.type) {
    case "IMAGES":
      return action.event;
    default:
      return state;
  }
};

export const toolbarVisibleHandler = (state = true, action) => {
  switch (action.type) {
    case "TOOLBAR":
      return action.event;
    default:
      return state;
  }
};

export const exploreMapHeadingHandler = (state = 0.0, action) => {
  switch (action.type) {
    case "MAPHEADINGEXPLORE":
      return action.event;
    default:
      return state;
  }
};

export const createMapHeadingHandler = (state = 0.0, action) => {
  switch (action.type) {
    case "MAPHEADINGCREATE":
      return action.event;
    default:
      return state;
  }
};
export const loadingVisibleHandler = (state = false, action) => {
  switch (action.type) {
    case "LOADINGVISIBLE":
      return action.event;
    default:
      return state;
  }
};

export const weatherDataHandler = (
  state = {
    weatherDataLoaded: false,
    weatherDataError: false,
    icon: null,
    temprature: null,
    percentageRain: null,
    windSpeed: null,
  },
  action
) => {
  switch (action.type) {
    case "WEATHERDATA":
      return action.event;
    default:
      return state;
  }
};
