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

export const recentSearchesHandler = (state = [], action) => {
  switch (action.type) {
    case "RECENTSEARCH":
      return action.event;
    default:
      return state;
  }
};

export const mapTypeHandler = (state = "standard", action) => {
  switch (action.type) {
    case "MAPTYPE":
      return action.event;
    default:
      return state;
  }
};

export const menuVisibleHandler = (state = false, action) => {
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
