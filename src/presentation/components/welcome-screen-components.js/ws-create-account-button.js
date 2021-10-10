import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";

export default function CreateAccountButton({ onPress }) {
  const { buttonStyle, textStyle } = styles();

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{"Create a free account"}</Text>
    </TouchableOpacity>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      marginTop: 20,
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 80,
      height: 50,
      borderRadius: 16,
    },
    textStyle: {
      fontSize: 18,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
