import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapViewExplore from "../components/mapviews/map-view-explore";
import { useSelector } from "react-redux";
import Banner from "../components/banner";
import { getTheme } from "../theme/themes";
import SwipeModal from "../components/swipe-modal";
import AddDifficultyAlert from "../components/add-difficulty-alert";

export default function Explore({ navigation }) {
  const { visible, message } = useSelector((state) => state.bannerHandler);
  const { containerStyle } = styles();

  return (
    <View style={containerStyle}>
      {/* <AddDifficultyAlert></AddDifficultyAlert> */}
      <SwipeModal></SwipeModal>
      <MapViewExplore></MapViewExplore>
      <Banner visible={visible} bannerText={message}></Banner>
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
