import {
  updateCurrentDirection,
  setHeadingWatcher,
} from "../../presentation/state_management/actions/actions";
import * as Location from "expo-location";
import store from "../../presentation/state_management/store/store";

export const watchHeading = async (callback) => {
  const headingWatcher = await Location.watchHeadingAsync((headObj) =>
    callback(headObj)
  );
  //   {
  //     const { trueHeading, magHeading } = headObj;
  //     const heading = trueHeading != -1 ? trueHeading : magHeading;
  //     const melbourne = {
  //       latitude: -37.840935,
  //       longitude: 144.946457,
  //     };
  //     ref.animateCamera(
  //       {
  //         center: melbourne,
  //         pitch: 2,
  //         heading: heading,
  //         altitude: 2000, //200000
  //         zoom: 250,
  //       },
  //       500
  //     );
  //     store.dispatch(updateCurrentDirection(heading));
  //   }
  // );

  store.dispatch(setHeadingWatcher(headingWatcher)); // This is needed to unsubscribe ron
};
