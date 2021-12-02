import { watchPosition } from "../resources/operating_system/watch-position";
import store from "../../presentation/state_management/store/store";
import {
  currentPositionUpdate,
  userCloseEnoughToStartUpdate,
  updateCurrentDirection,
  getWatcherReference,
  gpsLiveMapHeadingUpdate,
} from "../../presentation/state_management/actions/actions";
import { getDistanceBetween } from "../generators/distance-generator";
import { userCloseEnoughToBegin } from "../helpers/if_statements";
import { watchHeadingAsync } from "expo-location";

export async function followUserPosition(start, ref) {
  const startingPoint = start;

  let cur;

  const callback = async (location) => {
    const {
      coords: { latitude, longitude },
    } = location;

    const currentPosition = {
      latitude: latitude,
      longitude: longitude,
    };

    cur = currentPosition;

    //TEST: await and async added recently see if works
    const distanceUserToStart = await getDistanceBetween(
      startingPoint,
      currentPosition
    );
    const userCloseEnoughBool = await userCloseEnoughToBegin(
      distanceUserToStart
    );

    store.dispatch(userCloseEnoughToStartUpdate(userCloseEnoughBool));
    store.dispatch(currentPositionUpdate(currentPosition));
  };

  const headingCallback = async (headObj) => {
    const { trueHeading, magHeading } = headObj;
    const heading = trueHeading != -1 ? trueHeading : magHeading;
    // const melbourne = {
    //   latitude: -37.840935,
    //   longitude: 144.946457,
    // };

    ref.animateCamera(
      {
        center: cur,
        pitch: 50, //2,
        heading: heading, //heading - 160,
        altitude: 500, //200000
        zoom: 250,
      },
      500
    );

    store.dispatch(gpsLiveMapHeadingUpdate(heading));
    store.dispatch(updateCurrentDirection(heading));
  };

  watchHeadingAsync(headingCallback);
  watchPosition(callback);
}
