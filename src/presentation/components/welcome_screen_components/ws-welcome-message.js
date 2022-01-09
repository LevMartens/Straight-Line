import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";

export default function WelcomeMessage() {
  const { quoteStyle, textStyle } = styles();

  return (
    <View style={quoteStyle}>
      <Text style={textStyle}>{"Your next adventure starts here"}</Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle: {
      marginLeft: 40,
      width: 200,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    quoteStyle: {
      width: SCREEN_WIDTH,
      marginTop: 200,
      justifyContent: "flex-start",
    },
  });
};
