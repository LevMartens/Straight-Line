import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  Animated,
  View,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import { getTheme } from "../theme/themes";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";

export default function SwipeModal({ children }) {
  const { box, horizontalLine } = styles();
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 450 })).current; //450

  const [offset, setOffset] = useState(0);

  const maxVal = 650;
  const minVal = 450;

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
      <View style={horizontalLine}></View>
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
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      zIndex: 999,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primaryColor, //theme.secondaryColor,
      width: SCREEN_WIDTH,
      height: 300,
      borderRadius: 10,
    },
  });
};
