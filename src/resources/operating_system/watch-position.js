import { setPositionWatcher } from "../../presentation/state_management/actions/actions";
import * as Location from "expo-location";
import store from "../../presentation/state_management/store/store";

export const watchPosition = async (callback) => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    console.log(
      "WARNING: Foreground location permission denied, see: watch-position.js"
    );
  }

  const positionWatcher = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 1,
    },
    async (loc) => callback(loc)
  );

  store.dispatch(setPositionWatcher(positionWatcher)); // This is needed to unsubscribe ron
};
