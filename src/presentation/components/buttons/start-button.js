import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import { getTheme } from "../../theme/themes";

export default function StartButton({ navigation }) {
  const { containerStyle, buttonStyle, textStyle } = styles();
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          navigation.navigate("GPSLive");
        }}
      >
        <Text style={textStyle}>{"Start"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      //marginTop: 30,
      //flex: 1,
      marginBottom: 20,
      justifyContent: "flex-start",
    },
    buttonStyle: {
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 55,
      height: 50,
      borderRadius: 16,
    },
    textStyle: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
