import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Animated, View, PanResponder } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";

export default function GPSLiveSwipeModal({ children }) {
  const { box, horizontalLine } = styles();

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 600 })).current;

  const mapIsLoaded = useSelector((state) => state.mapIsLoadedHandler);

  const [offset, setOffset] = useState(600);

  const maxVal = 800; //850; //650;
  const minVal = 600; //650; //450;

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
    <Animated.View {...panResponder.panHandlers} style={[animatedStyle, box]}>
      {mapIsLoaded && <View style={horizontalLine}></View>}
      {children}
    </Animated.View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    horizontalLine: {
      position: "absolute",
      top: 8,
      width: 70,
      height: 3,
      backgroundColor: theme.buttonColor,
      borderRadius: 10,
    },
    box: {
      zIndex: 99999, //99999
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primaryColor,
      width: SCREEN_WIDTH,
      height: 300,
      borderRadius: 10,
    },
  });
};
