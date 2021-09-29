export const pathHandler = (state = [], action) => {
  switch (action.type) {
    case "UPDATEPATH":
      return action.event;
    default:
      return state;
  }
};

export const liveTrackingOnHandler = (state = false, action) => {
  switch (action.type) {
    case "LIVEON":
      return action.event;
    default:
      return state;
  }
};

export const finishedLineHandler = (state = false, action) => {
  switch (action.type) {
    case "FINISHEDLINE":
      return action.event;
    default:
      return state;
  }
};
