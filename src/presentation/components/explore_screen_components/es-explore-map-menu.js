import React, { useState } from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import CompassSvgComponent from "../_re-useables/svg_components/compass";
import LayersSvgComponent from "../_re-useables/svg_components/layers-svg";
import CurrentLocationSvgComponent from "../_re-useables/svg_components/current-location-svg";
import {
  exploreMapTypeUpdate,
  exploreMapHeadingUpdate,
} from "../../state_management/actions/actions";

export default function ExploreMapMenu() {
  const { compassStyle, layersStyle, containerStyle } = styles();

  const exploreMapViewRef = useSelector(
    (state) => state.exploreMapViewRefHandler
  );

  const mapType = useSelector((state) => state.exploreMapTypeHandler);
  const mapHeading = useSelector((state) => state.exploreMapHeadingHandler);

  const { aSingleCurrentPosition } = useSelector(
    (state) => state.locationHandler
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
      <TouchableOpacity style={compassStyle}>
        <View
          style={{
            transform: [
              {
                rotate: `-${mapHeading}deg`,
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
            store.dispatch(exploreMapTypeUpdate("hybridFlyover"));
          }
          if (mapType === "hybridFlyover" && !threeDOn) {
            exploreMapViewRef.animateCamera(cameraPosition3D, 500);
            setThreeDOn(true);
          }
          if (mapType === "hybridFlyover" && threeDOn) {
            exploreMapViewRef.animateCamera(cameraPositionNormal, 500);
            setThreeDOn(false);
            store.dispatch(exploreMapTypeUpdate("standard"));
          }
        }}
        style={layersStyle}
      >
        <LayersSvgComponent></LayersSvgComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          exploreMapViewRef.animateCamera(cameraPositionNormal, 500);
          store.dispatch(exploreMapHeadingUpdate(0.0));
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
