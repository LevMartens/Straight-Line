import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../theme/themes";
import { SCREEN_WIDTH } from "../../domain/resources/operating_system/dimensions";
import LottieView from "lottie-react-native";
import loadingDots from "../../../assets/loading-dots.json";

export default function ActivityIndicatorOnTransparentView() {
  const { textStyle, lottieStyle, textStyleB, buttonStyle, containerStyle } =
    styles();

  useEffect(() => {
    console.log("TEST: Loading render");
  }, []);

  return (
    <View style={containerStyle}>
      <LottieView
        style={lottieStyle}
        source={loadingDots}
        autoPlay
        loop={true}
      />
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      zIndex: 99999,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    buttonStyle: {
      paddingTop: 12,
      position: "relative",
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
  });
};
