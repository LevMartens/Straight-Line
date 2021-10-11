export const searchVisibleHandler = (state = false, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.event;
    default:
      return state;
  }
};
