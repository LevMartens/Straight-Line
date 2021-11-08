import React from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../../theme/themes";
import LottieView from "lottie-react-native";
import loadingDots from "../../../../assets/lotties/loading-dots.json";

export default function ActivityIndicatorOnTransparentView() {
  const { lottieStyle, containerStyle } = styles();

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
    lottieStyle: {
      zIndex: 88,
      ...StyleSheet.absoluteFillObject,
    },
  });
};
