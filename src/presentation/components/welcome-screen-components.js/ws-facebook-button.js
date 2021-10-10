import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import FacebookSvgComponent from "../svg-components/facebook-svg";

export default function FacebookButton({ onPress }) {
  const { buttonStyle, textStyle } = styles();

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <FacebookSvgComponent
        position={"absolute"}
        left={10}
        marginTop={8}
      ></FacebookSvgComponent>
      <Text style={textStyle}>{"Continue with Facebook"}</Text>
    </TouchableOpacity>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#4267B2",
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
