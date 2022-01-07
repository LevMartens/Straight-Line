export const pathHandler = (state = [], action) => {
  switch (action.type) {
    case "UPDATEPATH":
      return action.event;
    default:
      return state;
  }
};

export const finishedLineHandler = (
  state = {
    userFinished: false,
    score: 0,
    largestDeviation: 0,
    time: "No time",
    band: "No band",
  },
  action
) => {
  switch (action.type) {
    case "FINISHEDLINE":
      return action.event;
    default:
      return state;
  }
};
export const difficultyHandler = (
  state = { hasDifficulty: false, difficulty: 0 },
  action
) => {
  switch (action.type) {
    case "DIFFICULTY":
      return action.event;
    default:
      return state;
  }
};
