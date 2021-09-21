import { watchPosition } from "../resources/environment/watch-position";
import store from "../../presentation/state-management/store/store";
import {
  currentPositionUpdate,
  userCloseEnoughToStartUpdate,
  getWatcherReference,
} from "../../presentation/state-management/actions/actions";
import { getDistanceBetween } from "../generators/distance-generator";
import { userCloseEnoughToBegin } from "../helpers/if_statements";

export async function followUserPosition(start) {
  const startingPoint = start;
  const callback = async (location) => {
    const {
      coords: { latitude, longitude },
    } = location;

    const currentPosition = {
      latitude: latitude,
      longitude: longitude,
    };

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

  watchPosition(callback);
}
