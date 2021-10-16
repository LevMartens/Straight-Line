import React, { useEffect, useState } from "react";
import MapViewGPSLive from "../components/mapviews/map-view-gps-live";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../theme/themes";
import { useSelector } from "react-redux";
import SwipeModalNoBanner from "../components/swipe-modal-no-banner";
import { SCREEN_WIDTH } from "../../domain/resources/operating_system/dimensions";
import LottieView from "lottie-react-native";
import confetti from "../../../assets/confetti.json";
import confetti1 from "../../../assets/confetti1.json";
import dots from "../../../assets/dots.json";
import FinishedLineAlert from "../components/finished-line-alert";

export default function GPSLiveScreen({ navigation }) {
  const {
    containerStyle,
    textStyle,
    textStyle1,
    lottieStyle,
    lottieStyle1,
    textStyleB,
    buttonStyleB,
  } = styles();

  const { userFinished } = useSelector((state) => state.finishedLineHandler);

  const positionWatcher = useSelector((state) => state.positionWatcherHandler);

  useEffect(() => {
    if (userFinished) {
      console.log("TEST: Line finished");

      positionWatcher.remove();
    }
  }, [userFinished]);

  return (
    <View style={containerStyle}>
      {userFinished && (
        <FinishedLineAlert navigation={navigation}></FinishedLineAlert>
      )}
      <MapViewGPSLive navigation={navigation}></MapViewGPSLive>
      <SwipeModalNoBanner></SwipeModalNoBanner>
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyleB: {
      paddingTop: 12,
      position: "relative",
      // top: 40,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    textStyleB: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    lottieStyle: {
      zIndex: 88,
      ...StyleSheet.absoluteFillObject,
      //marginTop: 237,
      //width: 300,
      //height: 300,
    },
    lottieStyle1: {
      //zIndex: 88,
      //...StyleSheet.absoluteFillObject,
      //marginTop: 237,
      width: 50,
      height: 50,
    },
    buttonStyle: {
      position: "absolute",
      left: 20,
      top: 10,
      marginTop: 20,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 250,
      height: 40,
      borderRadius: 16,
    },
    textStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 25,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    buttonStyle1: {
      position: "absolute",
      top: 10,
      right: 20,
      marginTop: 20,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 250,
      height: 40,
      borderRadius: 16,
    },
    buttonTextStyle: {
      fontSize: 16,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#3A6351",
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
