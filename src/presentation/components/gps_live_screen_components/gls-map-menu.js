import React from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import CompassSvgComponent from "../_re-useables/svg_components/compass";
import LayersSvgComponent from "../_re-useables/svg_components/layers-svg";
import {
  gpsLiveMapTypeUpdate,
  radiusForBoundsUpdate,
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

  const mapType = useSelector((state) => state.gpsLiveMapTypeHandler);
  const mapHeading = useSelector((state) => state.gpsLiveMapHeadingHandler);

  const { radiusForBounds, circleColorOut, circleColorIn } = useSelector(
    (state) => state.radiusForBoundsHandler
  );

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
            store.dispatch(gpsLiveMapTypeUpdate("mutedStandard"));
          }
          if (mapType === "mutedStandard") {
            store.dispatch(gpsLiveMapTypeUpdate("standard"));
          }
        }}
        style={layersStyle}
      >
        <LayersSvgComponent></LayersSvgComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (radiusForBounds === 25) {
            store.dispatch(
              radiusForBoundsUpdate({
                radiusForBounds: 50,
                circleColor: "rgba(252, 156, 4, 0.3)",
                circleColorIn: "#FDCD81",
                circleColorOut: "rgba(252, 156, 4, 1)",
              })
            );
          }
          if (radiusForBounds === 50) {
            store.dispatch(
              radiusForBoundsUpdate({
                radiusForBounds: 75,
                circleColor: "rgba(211, 211, 211, 0.3)",
                circleColorIn: "#EDEDED",
                circleColorOut: "rgba(211, 211, 211, 1)",
              })
            );
          }
          if (radiusForBounds === 75) {
            store.dispatch(
              radiusForBoundsUpdate({
                radiusForBounds: 100,
                circleColor: "rgba(205, 128, 50, 0.3)",
                circleColorIn: "#EBCCAD",
                circleColorOut: "rgba(205, 128, 50, 1)",
              })
            );
          }
          if (radiusForBounds === 100) {
            store.dispatch(
              radiusForBoundsUpdate({
                radiusForBounds: 25,
                circleColor: "rgba(144, 202, 249, 0.3)",
                circleColorIn: "#DDEFFD",
                circleColorOut: "rgba(144, 202, 249, 1)",
              })
            );
          }
        }}
        style={layersStyle1}
      >
        <Text
          style={[ringTextStyle, { left: radiusForBounds === 100 ? 14 : 16.5 }]}
        >
          {radiusForBounds}m
        </Text>
        <RingSvgComponent
          colorIn={circleColorIn}
          colorOut={circleColorOut}
        ></RingSvgComponent>
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
