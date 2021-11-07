import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../../theme/themes";
import { SCREEN_WIDTH } from "../../../../domain/resources/operating_system/dimensions";
import { useSelector } from "react-redux";
import { startProducingPath } from "../../../../domain/use_cases/start-producing-path";
import store from "../../../state_management/store/store";
import { liveTrackingUpdate } from "../../../state_management/actions/actions";

export default function ReadyToStartModalComponent() {
  const { textStyle, buttonStyle, buttonTextStyle } = styles();

  const {
    rawLineData: {
      distance,
      startingCoordinates: { lat: pointALat, lng: pointALng },
      finishCoordinates: { lat: pointBLat, lng: pointBLng },
    },
  } = useSelector((state) => state.selectedLineDraftHandler);

  const positionWatcher = useSelector((state) => state.positionWatcherHandler);

  const pointA = {
    latitude: pointALat,
    longitude: pointALng,
  };

  const pointB = {
    latitude: pointBLat,
    longitude: pointBLng,
  };

  return (
    <View>
      <Text style={textStyle}>Good to go!</Text>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          positionWatcher.remove();
          store.dispatch(liveTrackingUpdate(true));
          startProducingPath(pointA, pointB, distance);
        }}
      >
        <Text style={buttonTextStyle}>{"Start Recording"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      marginTop: 30,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    buttonTextStyle: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle: {
      textAlign: "center",
      fontSize: 18,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
  });
};
