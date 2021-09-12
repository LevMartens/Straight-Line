import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import MenuSvgComponent from "../svg-components/menu-svg";

export default function MenuHeaderRightButton({ navigation }) {
  const { colorUnFocused } = getTheme();
  const { buttonStyle } = styles();

  return (
    <TouchableOpacity style={buttonStyle}>
      <MenuSvgComponent color={colorUnFocused}></MenuSvgComponent>
    </TouchableOpacity>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingRight: 20,
      paddingTop: 16,
      marginRight: 20,
      height: 50,
      position: "absolute",
    },
  });
};
