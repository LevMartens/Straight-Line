import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import GoogleSvgComponent from "../_re-useables/svg_components/google-svg";

export default function GoogleButton({ onPress }) {
  const { buttonStyle, textStyle } = styles();

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <GoogleSvgComponent
        position={"absolute"}
        left={10}
        marginTop={8}
      ></GoogleSvgComponent>
      <Text style={textStyle}>{"Continue with Google"}</Text>
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
      backgroundColor: "#fff",
      width: SCREEN_WIDTH - 80,
      height: 50,
      borderRadius: 16,
    },
    textStyle: {
      fontSize: 18,
      color: "black",
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
