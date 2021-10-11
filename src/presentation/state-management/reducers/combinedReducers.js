import { combineReducers } from "redux";
import {
  startMarkerHandler,
  endMarkerHandler,
  createLineStateHandler,
} from "./create-line-handler";
import {
  watchCurrentPosition,
  watchDirection,
  aSingleCurrentPosition,
  positionWatcherHandler,
  headingWatcherHandler,
  userCloseEnoughToStartHandler,
} from "./location-handler";
import {
  lineMarkersHandler,
  bannerHandler,
  selectedMarkerHandler,
  selectedLineDraftHandler,
  lineTitleHandler,
} from "./line-data-handlers";
import {
  difficultyHandler,
  finishedLineHandler,
  liveTrackingOnHandler,
  pathHandler,
} from "./live-line-recording-handler";
import { searchVisibleHandler } from "./ui-handler";

export default combineReducers({
  searchVisibleHandler,
  difficultyHandler,
  finishedLineHandler,
  liveTrackingOnHandler,
  userCloseEnoughToStartHandler,
  headingWatcherHandler,
  positionWatcherHandler,
  pathHandler,
  lineTitleHandler,
  selectedLineDraftHandler,
  selectedMarkerHandler,
  bannerHandler,
  lineMarkersHandler,
  createLineStateHandler,
  startMarkerHandler,
  endMarkerHandler,
  watchCurrentPosition,
  watchDirection,
  aSingleCurrentPosition,
});
