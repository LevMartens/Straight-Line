import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../../theme/themes";
import { SCREEN_WIDTH } from "../../../../domain/resources/operating_system/dimensions";
import { useSelector } from "react-redux";

export default function LiveDataModalComponent() {
  const { textStyle2, textStyle1, buttonStyle, buttonTextStyle } = styles();

  const {
    rawLineData: { distance },
  } = useSelector((state) => state.selectedLineDraftHandler);

  const distanceToEndPoint = useSelector(
    (state) => state.distanceToEndPointHandler
  );

  const currentBand = useSelector((state) => state.currentBandHandler);

  const largestDeviation = useSelector(
    (state) => state.largestDeviationHandler
  );

  return (
    <View>
      <View
        style={{
          marginTop: 40,
          marginLeft: 30,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Distance to finish line</Text>
        <Text style={textStyle1}>{`${
          distance - distanceToEndPoint
        }m / ${distance}m`}</Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Largest deviation </Text>
        <Text style={textStyle1}>{largestDeviation}m</Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Current band </Text>
        <Text style={textStyle1}>{currentBand}</Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          width: SCREEN_WIDTH,
          marginBottom: 20,
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={buttonStyle} onPress={() => {}}>
          <Text style={buttonTextStyle}>{"Stop recording"}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          width: SCREEN_WIDTH,
          marginBottom: 60,
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      marginTop: 40,
      paddingTop: 12, //10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 55,
      height: 50,
      borderRadius: 16,
    },
    buttonStyle1: {
      position: "absolute",
      top: 10,
      right: 20,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 250,
      height: 40,
      borderRadius: 16,
    },
    buttonTextStyle: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle: {
      flex: 0.5,
      marginTop: 30,
      textAlign: "center",
      fontSize: 16,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      flex: 1,
      textAlign: "center",
      fontSize: 16,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    textStyle2: {
      flex: 1,
      textAlign: "left",
      fontSize: 16,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    chartContainerStyle: {
      width: SCREEN_WIDTH - 57,
      flex: 2,
      marginBottom: 30,
    },
    chartStyle: {
      paddingRight: 15,
      fontFamily: theme.fontFamily,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
      borderRadius: 16,
    },
  });
};
