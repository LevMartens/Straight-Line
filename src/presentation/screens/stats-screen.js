import React from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";

export default function Stats({ navigation }) {
  const themedStyles = styles();

  return <View style={themedStyles.container}></View>;
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
