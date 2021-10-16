import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { getTheme } from "../../theme/themes";

export default function OrDivider() {
  const { textStyle } = styles();

  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "white", height: 1, width: 150 }}></View>
      <Text style={textStyle}>or</Text>
      <View style={{ backgroundColor: "white", height: 1, width: 150 }}></View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle: {
      marginHorizontal: 5,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
