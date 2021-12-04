import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getTheme } from "../../theme/themes";

export default function SwipeModalNoLines() {
  const { textStyle } = styles();

  return (
    <View>
      <Text style={textStyle}> {"There are no lines in this area"} </Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle: {
      marginTop: 3,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontThick,
    },
  });
};
