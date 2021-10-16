import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "../../theme/themes";
import StatsSvgComponent from "../svg_components/stats-svg";

export default function StatsIcon({ focused }) {
  const { colorFocused, colorUnFocused } = getTheme();
  const { textFocusedStyle, textUnFocusedStyle } = styles();

  return (
    <View style={{ alignItems: "center" }}>
      <StatsSvgComponent color={focused ? colorFocused : colorUnFocused}>
        {" "}
      </StatsSvgComponent>
      <Text style={focused ? textFocusedStyle : textUnFocusedStyle}>
        {"Stats"}
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
      marginTop: 2,
    },
    textUnFocusedStyle: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: theme.fontFamily,
      color: theme.colorUnFocused,
      marginTop: 2,
    },
  });
};
