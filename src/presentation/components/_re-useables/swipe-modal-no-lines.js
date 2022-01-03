import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import LottieView from "lottie-react-native";
import arrowLottie from "../../../../assets/lotties/arrow.json";
import SizedBox from "./sized-box";

export default function SwipeModalNoLines() {
  const { textStyle, textStyle1, lottieStyle } = styles();

  return (
    <View>
      <Text style={textStyle}>{"There are no lines near you,"}</Text>
      <Text style={textStyle1}>{"let's create a new one!"}</Text>
      <SizedBox width={30} height={60}></SizedBox>
      <View
        style={{
          position: "absolute",
          top: 80,
          left: 24,
        }}
      >
        <LottieView
          style={lottieStyle}
          source={arrowLottie}
          autoPlay
          loop={true}
        />
      </View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle: {
      marginTop: 3,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontThick,
    },
    textStyle1: {
      marginTop: 3,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontThick,
    },
    lottieStyle: {
      //backgroundColor: "green",
      width: 70,
      height: 70,
      // zIndex: 999,
      // position: "absolute",
      // left: 9,
      // bottom: 10,
      //...StyleSheet.absoluteFillObject,
    },
  });
};
