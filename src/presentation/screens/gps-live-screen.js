import React, { useEffect } from "react";
import MapViewGPSLive from "../components/gps_live_screen_components/gls-map-view";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../resources/operating_system/dimensions";
import FinishedLineAlert from "../components/gps_live_screen_components/finished-line-alert";
import GpsLiveMapMenu from "../components/gps_live_screen_components/gls-map-menu";
import GPSLiveSwipeModal from "../components/gps_live_screen_components/gls-swipe-modal";
import ReadyToStartModalComponent from "../components/gps_live_screen_components/modal_components/ready-to-start";
import GetDirectionsModalComponent from "../components/gps_live_screen_components/modal_components/get-directions";
import LiveDataModalComponent from "../components/gps_live_screen_components/modal_components/live-data";
import SwipeModalLoading from "../components/_re-useables/swipe-modal-loading";

export default function GPSLiveScreen({ navigation }) {
  const { containerStyle } = styles();

  const { userFinished } = useSelector((state) => state.finishedLineHandler);

  const { userCloseEnoughToStart, liveTrackingOn, positionWatcher } =
    useSelector((state) => state.locationHandler);

  useEffect(() => {
    if (userFinished) {
      console.log("LOG: Line mission finished");

      positionWatcher.remove();
    }
  }, [userFinished]);

  return (
    <View style={containerStyle}>
      {userFinished && (
        <FinishedLineAlert navigation={navigation}></FinishedLineAlert>
      )}
      <GpsLiveMapMenu></GpsLiveMapMenu>
      <MapViewGPSLive></MapViewGPSLive>
      <GPSLiveSwipeModal>
        {(userCloseEnoughToStart === true) & (liveTrackingOn === false) ? (
          <ReadyToStartModalComponent></ReadyToStartModalComponent>
        ) : userCloseEnoughToStart === false ? (
          <GetDirectionsModalComponent></GetDirectionsModalComponent>
        ) : liveTrackingOn ? (
          <LiveDataModalComponent></LiveDataModalComponent>
        ) : (
          <SwipeModalLoading></SwipeModalLoading>
        )}
      </GPSLiveSwipeModal>
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyleB: {
      paddingTop: 12,
      position: "relative",
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    textStyleB: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    lottieStyle: {
      zIndex: 88,
      ...StyleSheet.absoluteFillObject,
    },
    lottieStyle1: {
      width: 50,
      height: 50,
    },
    buttonStyle: {
      position: "absolute",
      left: 20,
      top: 10,
      marginTop: 20,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 250,
      height: 40,
      borderRadius: 16,
    },
    textStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 25,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    buttonStyle1: {
      position: "absolute",
      top: 10,
      right: 20,
      marginTop: 20,
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
      fontSize: 16,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#3A6351",
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
