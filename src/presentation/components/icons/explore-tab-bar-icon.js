import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "../../theme/themes";
import ExploreSvgComponent from "../svg_components/explore-svg";

export default function ExploreIcon({ focused }) {
  const { colorFocused, colorUnFocused } = getTheme();
  const { textFocusedStyle, textUnFocusedStyle } = styles();

  return (
    <View style={{ alignItems: "center" }}>
      <ExploreSvgComponent
        color={focused ? colorFocused : colorUnFocused}
      ></ExploreSvgComponent>
      <Text style={focused ? textFocusedStyle : textUnFocusedStyle}>
        {"Explore"}
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
    },
    textUnFocusedStyle: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: theme.fontFamily,
      color: theme.colorUnFocused,
    },
  });
};
