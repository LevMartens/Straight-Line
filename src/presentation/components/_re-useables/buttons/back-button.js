import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../../theme/themes";
import BackSvgComponent from "../../_re-useables/svg_components/back-svg";

export default function BackHeaderButton({ navigation, to }) {
  const { colorUnFocused } = getTheme();
  const { buttonStyle } = styles();
  const toDestination = to;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => navigation.navigate(toDestination)}
    >
      <BackSvgComponent color={colorUnFocused}></BackSvgComponent>
    </TouchableOpacity>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingTop: 15,
      marginLeft: 20,
      height: 50,
      position: "absolute",
    },
  });
};
