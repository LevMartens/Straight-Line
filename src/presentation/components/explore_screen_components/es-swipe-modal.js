import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import store from "../../state_management/store/store";
import {
  StyleSheet,
  Text,
  Image,
  Animated,
  View,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";

export default function SwipeModal({ children }) {
  const { box, horizontalLine } = styles();
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 450 })).current; //450
  const mapIsLoaded = useSelector((state) => state.mapIsLoadedHandler);

  const [offset, setOffset] = useState(450);

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
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      zIndex: 9999999999,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primaryColor, //theme.secondaryColor,
      width: SCREEN_WIDTH,
      height: 300,
      borderRadius: 10,
    },
  });
};
