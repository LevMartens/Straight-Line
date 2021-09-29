import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { getTheme } from "../../theme/themes";

export default function WalkAnotherTimeButton({ navigation }) {
  const { containerStyle, buttonStyle, textStyle } = styles();
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={buttonStyle} onPress={() => {}}>
        <Text style={textStyle}>{"Walk some other time"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      flex: 1,
      //marginBottom: 20,
    },
    buttonStyle: {
      paddingTop: 3,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.secondaryColor,
      width: SCREEN_WIDTH - 55,
      height: 50,
      borderRadius: 16,
    },
    textStyle: {
      marginTop: 10,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
