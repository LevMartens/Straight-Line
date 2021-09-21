import React from "react";
import MapViewGPSLive from "../components/mapviews/map-view-gps-live";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";
import SwipeModalNoBanner from "../components/swipe-modal-no-banner";

export default function GPSLiveScreen() {
  const { containerStyle } = styles();
  return (
    <View style={containerStyle}>
      <MapViewGPSLive></MapViewGPSLive>
      <SwipeModalNoBanner></SwipeModalNoBanner>
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#3A6351",
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
