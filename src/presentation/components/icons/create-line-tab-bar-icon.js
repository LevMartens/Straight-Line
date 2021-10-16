import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "../../theme/themes";
import CreateLineSvgComponent from "../svg_components/create-line-svg";

export default function CreateLineIcon({ focused }) {
  const { colorFocused, colorUnFocused } = getTheme();
  const { textFocusedStyle, textUnFocusedStyle } = styles();

  return (
    <View style={{ alignItems: "center" }}>
      <CreateLineSvgComponent
        color={focused ? colorFocused : colorUnFocused}
      ></CreateLineSvgComponent>
      <Text style={focused ? textFocusedStyle : textUnFocusedStyle}>
        {"New Line"}
      </Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textFocusedStyle: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: theme.fontFamily,
      color: theme.colorFocused,
      marginTop: 2.5,
    },
    textUnFocusedStyle: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: theme.fontFamily,
      color: theme.colorUnFocused,
      marginTop: 2.5,
    },
  });
};
