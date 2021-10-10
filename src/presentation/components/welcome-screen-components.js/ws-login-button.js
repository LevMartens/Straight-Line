import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { getTheme } from "../../theme/themes";

export default function LoginButton({ onPress }) {
  const { buttonStyle, textStyle, buttonTextStyle, container } = styles();

  return (
    <View style={container}>
      <Text style={textStyle}>Already have an account?</Text>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={buttonTextStyle}>{"Log in"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    container: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      width: 250,
    },
    textStyle: {
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    buttonStyle: {
      justifyContent: "center",
      alignSelf: "center",
    },
    buttonTextStyle: {
      textDecorationLine: "underline",
      marginLeft: 3,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
