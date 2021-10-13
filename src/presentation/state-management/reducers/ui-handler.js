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
