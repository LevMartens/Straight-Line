import React, { useEffect } from "react";
import MapViewCreateLine from "../components/create_line_screen_components/cl-map-view";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";
import { useSelector } from "react-redux";
import CreateLineToolbar from "../components/create_line_screen_components/cl-toolbar-menu";
import {
  setMarkerEndPoint,
  setMarkerStartingPoint,
} from "../state_management/actions/actions";
import store from "../state_management/store/store";
import CreateLineMapMenu from "../components/create_line_screen_components/cl-create-map-menu";
import ActivityIndicatorOnTransparentView from "../components/_re-useables/activity-indicator-transparent-view.js";

export default function CreateLineScreen({ navigation }) {
  const { containerStyle } = styles();

  const toolbarVisible = useSelector((state) => state.toolbarVisibleHandler);
  const menuVisible = useSelector((state) => state.menuVisibleHandler);
  const loadingVisible = useSelector((state) => state.loadingVisibleHandler);

  const { aSingleCurrentPosition } = useSelector(
    (state) => state.locationHandler
  );
  const initialStartingPoint = aSingleCurrentPosition;

  const initialEndPoint = {
    latitude: aSingleCurrentPosition.latitude + 0.111,
    longitude: aSingleCurrentPosition.longitude + 0.111,
  };

  useEffect(() => {
    store.dispatch(setMarkerStartingPoint(initialStartingPoint));

    store.dispatch(setMarkerEndPoint(initialEndPoint));
  }, []);

  return (
    <View style={containerStyle}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      <MapViewCreateLine></MapViewCreateLine>
      {toolbarVisible && <CreateLineToolbar></CreateLineToolbar>}
      {menuVisible && <CreateLineMapMenu></CreateLineMapMenu>}
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
