import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import LottieView from "lottie-react-native";
import confetti from "../../../../assets/lotties/confetti.json";

export default function FinishedLineAlert({ navigation }) {
  const { textStyle, lottieStyle, textStyleB, buttonStyle, containerStyle } =
    styles();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>You finished your line mission!</Text>
      {showButton === true ? (
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => {
            navigation.navigate("LINE_REVIEW");
          }}
        >
          <Text style={textStyleB}>Review line</Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      {showButton === false && (
        <LottieView
          style={lottieStyle}
          source={confetti}
          autoPlay
          loop={false}
        />
      )}
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
