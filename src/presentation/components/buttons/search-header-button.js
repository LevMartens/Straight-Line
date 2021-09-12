import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import SearchSvgComponent from "../svg-components/search-svg";

export default function SearchHeaderButton() {
  const { colorUnFocused } = getTheme();
  const { buttonStyle } = styles();

  return (
    <TouchableOpacity style={buttonStyle}>
      <SearchSvgComponent color={colorUnFocused}></SearchSvgComponent>
    </TouchableOpacity>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingRight: 20,
      paddingTop: 16,
      marginLeft: 20,
      height: 50,
      position: "absolute",
    },
  });
};
