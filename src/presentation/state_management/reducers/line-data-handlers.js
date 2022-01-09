// export const lineMarkersHandler = (
//   state = [
//     {
//       isLoaded: false,
//     },
//   ],
//   action
// ) => {
//   switch (action.type) {
//     case "GETLINEMARKERS":
//       return action.lineMarkers;
//     default:
//       return state;
//   }
// };

// export const selectedMarkerHandler = (
//   state = {
//     id: 0,
//     isLoaded: false,
//     rawLineData: {
//       title: "loading",
//       difficultyLevel: "loading",
//       distance: "loading",
//     },
//   },

//   action
// ) => {
//   switch (action.type) {
//     case "SELECTMARKER":
//       return action.event;
//     case "RESETMARKER":
//       return state;
//     default:
//       return state;
//   }
// };

/* 
selectedLineDraftHandler: Handles the line draft that is currently selected. 
Line draft data will be passed through the handler when a line is created or when a draft is selected ready for execution.
A variable will hold on to the current line draft data untill the user finishes the line, 
then the line draft data will be used to create a public line and the 
currently selected line draft data will be reset with state. 
*/
// export const selectedLineDraftHandler = (
//   state = {
//     id: 0,
//     isLoaded: false,
//     rawLineData: {
//       distance: "NO DISTANCE",
//       elevationPoints: [],
//     },
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "SELECTLINEDRAFT":
//       console.log(
//         "LOG: New line draft selected. source: line-data-handlers.js"
//       );
//       return action.event;
//     case "RESETLINEDRAFT":
//       console.log("LOG: Line draft reset. source: line-data-handlers.js");
//       return state;
//     default:
//       return state;
//   }
// };

// export const lineTitleHandler = (state = "Nameless", action) => {
//   switch (action.type) {
//     case "ADDLINETITLE":
//       return action.event;
//     default:
//       return state;
//   }
// };

/* 
selectedLineDraftHandler: Handles the line draft that is currently selected. 
Line draft data will be passed through the handler when a line is created or when a draft is selected ready for execution.
A variable will hold on to the current line draft data untill the user finishes the line, 
then the line draft data will be used to create a public line and the 
currently selected line draft data will be reset with state. 
*/

export const lineDataHandler = (
  state = {
    publicLines: [
      {
        isLoaded: false,
      },
    ],
    selectedPublicLine: {
      id: 0,
      isLoaded: false,
      noLinesFound: true,
      rawLineData: {
        title: "loading",
        difficultyLevel: "loading",
        distance: "loading",
      },
    },
    selectedLineDraft: {
      id: 0,
      isLoaded: false,
      rawLineData: {
        distance: "NO DISTANCE",
        elevationPoints: [],
      },
    },
    lineTitle: "Nameless",
  },
  action
) => {
  switch (action.type) {
    case "PUBLIC_LINES":
      return updateObject(state, { publicLines: action.publicLines });

    case "SElECT_PUBLIC_LINE":
      return updateObject(state, { selectedPublicLine: action.event });

    case "RESET_SELECTED_PUBLIC_LINE":
      return updateObject(state, {
        selectedPublicLine: state.selectedPublicLine,
      });

    case "SELECT_LINE_DRAFT":
      return updateObject(state, { selectedLineDraft: action.event });

    case "RESET_SELECTED_LINE_DRAFT":
      return updateObject(state, {
        selectedLineDraft: state.selectedLineDraft,
      });

    case "LINE_TITLE":
      return updateObject(state, {
        lineTitle: action.lineTitle,
      });

    default:
      return state;
  }
};

function updateObject(oldObject, newValues) {
  // Object.assign to ensure data is correctly copied instead of mutated
  return Object.assign({}, oldObject, newValues);
}
