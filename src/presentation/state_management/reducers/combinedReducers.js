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
import {
  imagesHandler,
  mapIsLoadedHandler,
  mapTypeHandler,
  mapViewRefHandler,
  menuVisibleHandler,
  recentSearchesHandler,
  searchResultsHandler,
  searchVisibleHandler,
  showHeadingOnHandler,
  timeDelayHandler,
} from "./ui-handler";

export default combineReducers({
  imagesHandler,
  mapIsLoadedHandler,
  showHeadingOnHandler,
  menuVisibleHandler,
  mapTypeHandler,
  recentSearchesHandler,
  mapViewRefHandler,
  searchResultsHandler,
  timeDelayHandler,
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
