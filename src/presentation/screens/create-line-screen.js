import React, { useEffect } from "react";
import MapViewCreateLine from "../../presentation/components/mapviews/map-view-create-line";
import PinSetButton from "../components/buttons/pin-set-button";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";
import { useSelector } from "react-redux";
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from "../../domain/resources/operating_system/dimensions";
import CreateLineToolbar from "../components/create_line_screen_components/cl-toolbar-menu";
import ExploreMapMenu from "../components/explore_screen_components/es-explore-map-menu";
import { onScreenUpdate } from "../state_management/actions/actions";
import store from "../state_management/store/store";
import CreateLineMapMenu from "../components/create_line_screen_components/cl-create-map-menu";
import ActivityIndicatorOnTransparentView from "../components/activity-indicator-transparent-view.js";

//TODO give aSingleCurrentPosition an "isLoaded" and render MapViewCreateLine conditionally

export default function CreateLineScreen({ navigation }) {
  const { containerStyle } = styles();

  const { latitude, longitude } = useSelector(
    (state) => state.aSingleCurrentPosition
  );
  const toolbarVisible = useSelector((state) => state.toolbarVisibleHandler);
  const menuVisible = useSelector((state) => state.menuVisibleHandler);
  const loadingVisible = useSelector((state) => state.loadingVisibleHandler);

  // const createMapViewRef = useSelector(
  //   (state) => state.createMapViewRefHandler
  // );

  const initialRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return (
    <View style={containerStyle}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      <MapViewCreateLine initialRegion={initialRegion}></MapViewCreateLine>
      {toolbarVisible && <CreateLineToolbar></CreateLineToolbar>}
      {menuVisible && <CreateLineMapMenu></CreateLineMapMenu>}

      {/* <PinSetButton navigation={navigation}> </PinSetButton> */}
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
