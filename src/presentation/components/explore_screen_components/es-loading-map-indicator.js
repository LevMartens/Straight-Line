import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import LottieView from "lottie-react-native";
import loadingDots from "../../../../assets/loading-dots.json";

export default function LoadingMapIndicator() {
  const { lottieStyle, textStyle } = styles();

  return (
    <View style={lottieStyle}>
      <LottieView
        style={lottieStyle}
        source={loadingDots}
        autoPlay
        loop={true}
      />
      <Text style={textStyle}>Loading map</Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle: {
      marginTop: 3,
      textAlign: "center",
      marginTop: 300,
      zIndex: 2,
      ...StyleSheet.absoluteFillObject,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontThick,
    },
    lottieStyle: {
      zIndex: 1,
      ...StyleSheet.absoluteFillObject,
    },
  });
};
