import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import { saveLineDraft } from "../../../domain/use_cases/save-line-draft";
import { getTheme } from "../../theme/themes";

export default function WalkAnotherTimeButton({ navigation }) {
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
          navigation.navigate("CreateLineScreen");
        }}
      >
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
