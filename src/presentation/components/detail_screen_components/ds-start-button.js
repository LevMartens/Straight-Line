import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import { getTheme } from "../../theme/themes";
import { useSelector } from "react-redux";
import { saveLineDraft } from "../../../domain/use_cases/save-line-draft";

export default function StartButton({ navigation }) {
  const { containerStyle, buttonStyle, textStyle } = styles();
  // const { rawLineData } = useSelector(
  //   (state) => state.selectedLineDraftHandler
  // );
  const {
    selectedLineDraft: { rawLineData },
  } = useSelector((state) => state.lineDataHandler);
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          saveLineDraft(rawLineData);
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
