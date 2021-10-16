import React, { useState } from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { watchHeading } from "../../../domain/resources/operating_system/watch-heading";
import CompassSvgComponent from "../svg_components/compass";
import LayersSvgComponent from "../svg_components/layers-svg";
import CurrentLocationSvgComponent from "../svg_components/current-location-svg";
import {
  mapTypeUpdate,
  showHeadingOnUpdate,
} from "../../state_management/actions/actions";

export default function ExploreMapMenu() {
  const { compassStyle, layersStyle, containerStyle } = styles();

  const showHeadingOn = useSelector((state) => state.showHeadingOnHandler);
  const liveDirection = useSelector((state) => state.watchDirection);
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const headingWatcher = useSelector((state) => state.headingWatcherHandler);
  const mapType = useSelector((state) => state.mapTypeHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );

  const [threeDOn, setThreeDOn] = useState(false);

  const cameraPositionNormal = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  const cameraPosition3D = {
    center: aSingleCurrentPosition,
    pitch: 50,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => {
          if (showHeadingOn) {
            headingWatcher.remove();
            mapViewRef.animateCamera(cameraPositionNormal, 500);
            store.dispatch(showHeadingOnUpdate(false));
          }
          if (!showHeadingOn) {
            watchHeading(mapViewRef);
            store.dispatch(showHeadingOnUpdate(true));
          }
        }}
        style={compassStyle}
      >
        <View
          style={{
            transform: [
              {
                rotate: showHeadingOn ? `${liveDirection}deg` : `0.0deg`,
              },
            ],
          }}
        >
          <CompassSvgComponent></CompassSvgComponent>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          if (mapType === "standard") {
            store.dispatch(mapTypeUpdate("hybridFlyover"));
          }
          if (mapType === "hybridFlyover" && !threeDOn) {
            mapViewRef.animateCamera(cameraPosition3D, 500);
            setThreeDOn(true);
          }
          if (mapType === "hybridFlyover" && threeDOn) {
            mapViewRef.animateCamera(cameraPositionNormal, 500);
            setThreeDOn(false);
            store.dispatch(mapTypeUpdate("standard"));
          }
        }}
        style={layersStyle}
      >
        <LayersSvgComponent></LayersSvgComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          mapViewRef.animateCamera(cameraPositionNormal, 500);
        }}
        style={layersStyle}
      >
        <CurrentLocationSvgComponent></CurrentLocationSvgComponent>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    layersStyle: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      borderRadius: 35,
      height: 60,
      width: 60,
      paddingLeft: 15,
      paddingTop: 15,
    },
    compassStyle: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      borderRadius: 35,
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    containerStyle: {
      zIndex: 999999999999999,
      position: "absolute",
      top: 0,
      right: 0,
      height: 200,
      width: 70,
      alignItems: "center",
    },
  });
};
