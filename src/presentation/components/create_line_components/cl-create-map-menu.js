import React, { useState } from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import CompassSvgComponent from "../svg_components/compass";
import LayersSvgComponent from "../svg_components/layers-svg";
import CurrentLocationSvgComponent from "../svg_components/current-location-svg";
import {
  createLineMapTypeUpdate,
  createMapHeadingUpdate,
} from "../../state_management/actions/actions";

export default function CreateLineMapMenu() {
  const { compassStyle, layersStyle, containerStyle } = styles();

  const createLineMapViewRef = useSelector(
    (state) => state.createLineMapViewRefHandler
  );

  const mapType = useSelector((state) => state.createLineMapTypeHandler);
  const mapHeading = useSelector((state) => state.createMapHeadingHandler);

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
          if (mapType === "satellite") {
            store.dispatch(createLineMapTypeUpdate("hybridFlyover"));
          }
          if (mapType === "hybridFlyover" && !threeDOn) {
            createLineMapViewRef.animateCamera(cameraPosition3D, 500);
            setThreeDOn(true);
          }
          if (mapType === "hybridFlyover" && threeDOn) {
            createLineMapViewRef.animateCamera(cameraPositionNormal, 500);
            setThreeDOn(false);
            store.dispatch(createLineMapTypeUpdate("satellite"));
          }
        }}
        style={layersStyle}
      >
        <LayersSvgComponent></LayersSvgComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          createLineMapViewRef.animateCamera(cameraPositionNormal, 500);
          store.dispatch(createMapHeadingUpdate(0.0));
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
