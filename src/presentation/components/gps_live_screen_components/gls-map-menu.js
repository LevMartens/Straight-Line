import React, { useState } from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import CompassSvgComponent from "../_re-useables/svg_components/compass";
import LayersSvgComponent from "../_re-useables/svg_components/layers-svg";
import CurrentLocationSvgComponent from "../_re-useables/svg_components/current-location-svg";
import {
  gpsLiveMapTypeUpdate,
  gpsLiveMapHeadingUpdate,
} from "../../state_management/actions/actions";
import RingSvgComponent from "../_re-useables/svg_components/ring-svg";

export default function GpsLiveMapMenu() {
  const {
    compassStyle,
    layersStyle,
    containerStyle,
    layersStyle1,
    ringTextStyle,
  } = styles();

  const gpsLiveMapViewRef = useSelector(
    (state) => state.gpsLiveMapViewRefHandler
  );

  const mapType = useSelector((state) => state.gpsLiveMapTypeHandler);
  const mapHeading = useSelector((state) => state.gpsLiveMapHeadingHandler);

  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );

  const [threeDOn, setThreeDOn] = useState(false);

  const cameraPositionNormal = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 500,
    zoom: 40,
  };

  const cameraPosition3D = {
    center: aSingleCurrentPosition,
    pitch: 100,
    heading: 0.0,
    altitude: 500,
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
            store.dispatch(gpsLiveMapTypeUpdate("hybridFlyover"));
          }
          if (mapType === "hybridFlyover") {
            //gpsLiveMapViewRef.animateCamera(cameraPosition3D, 500);
            store.dispatch(gpsLiveMapTypeUpdate("mutedStandard"));
            //setThreeDOn(true);
          }
          if (mapType === "mutedStandard") {
            //gpsLiveMapViewRef.animateCamera(cameraPositionNormal, 500);
            //setThreeDOn(false);
            store.dispatch(gpsLiveMapTypeUpdate("standard"));
          }
        }}
        style={layersStyle}
      >
        <LayersSvgComponent></LayersSvgComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //gpsLiveMapViewRef.animateCamera(cameraPositionNormal, 500);
          //store.dispatch(gpsLiveMapHeadingUpdate(0.0));
        }}
        style={layersStyle1}
      >
        <Text style={ringTextStyle}>25m</Text>
        <RingSvgComponent></RingSvgComponent>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    layersStyle1: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      borderRadius: 35,
      height: 60,
      width: 60,
      //paddingLeft: 6.5,
      //paddingTop: 6.5,
    },
    ringTextStyle: {
      zIndex: 99,
      position: "absolute",
      left: 16.5,
      top: 21,
      color: "black",
      fontFamily: theme.fontFamily,
    },
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
      top: 50,
      right: 0,
      height: 200,
      width: 70,
      alignItems: "center",
    },
  });
};
