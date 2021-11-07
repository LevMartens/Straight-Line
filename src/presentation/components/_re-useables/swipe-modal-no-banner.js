import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Animated, View, PanResponder } from "react-native";
import { useSelector } from "react-redux";
import { getTheme } from "../../theme/themes";
import { ActivityIndicator } from "react-native-paper";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import GetDirectionsModalComponent from "../gps_live_screen_components/modal_components/get-directions";
import ReadyToStartModalComponent from "../gps_live_screen_components/modal_components/ready-to-start";
import LiveDataModalComponent from "../gps_live_screen_components/modal_components/live-data";

export default function SwipeModalNoBanner() {
  const { boxStyle, horizontalLineStyle } = styles();

  const userCloseEnoughToBegin = useSelector(
    (state) => state.userCloseEnoughToStartHandler
  );

  const liveTrackingOn = useSelector((state) => state.liveTrackingOnHandler);

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 600 })).current;

  const [offset, setOffset] = useState(0);

  const maxVal = 800;

  const minVal = 600;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (e, gesture) => {
      const newVal =
        offset + gesture.dy > maxVal
          ? maxVal
          : offset + gesture.dy < minVal
          ? minVal
          : offset + gesture.dy;
      pan.setValue({ x: 0, y: newVal });
    },
    onPanResponderRelease: (e, gesture) => {
      const newVal =
        offset + gesture.dy > maxVal
          ? maxVal
          : offset + gesture.dy < minVal
          ? minVal
          : offset + gesture.dy;
      setOffset(newVal);
    },
  });
  const animatedStyle = {
    transform: [...pan.getTranslateTransform()],
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[animatedStyle, boxStyle]}
    >
      <View style={horizontalLineStyle}></View>
      {(userCloseEnoughToBegin === true) & (liveTrackingOn === false) ? (
        <ReadyToStartModalComponent></ReadyToStartModalComponent>
      ) : userCloseEnoughToBegin === false ? (
        <GetDirectionsModalComponent></GetDirectionsModalComponent>
      ) : liveTrackingOn ? (
        <LiveDataModalComponent></LiveDataModalComponent>
      ) : (
        <ActivityIndicator
          animating={true}
          color={{ color: "white" }}
          size={"large"}
        />
      )}
      {/* <LiveDataModalComponent></LiveDataModalComponent> */}
    </Animated.View>
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
      fontSize: 18,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    horizontalLineStyle: {
      position: "absolute",
      top: 15,
      width: 200,
      height: 5,
      backgroundColor: theme.buttonColor,
      borderRadius: 10,
    },
    boxStyle: {
      zIndex: 999,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.secondaryColor,
      width: SCREEN_WIDTH,
      height: 300,
      borderRadius: 16,
    },
  });
};
