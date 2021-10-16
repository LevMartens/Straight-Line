import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Animated } from "react-native";
import { getTheme } from "../../theme/themes";
import { openBanner } from "../../state_management/actions/actions";
import store from "../../state_management/store/store";
import { throttle } from "lodash";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import LottieView from "lottie-react-native";
import loadingLottie from "../../../../assets/loading-dots.json";

let throttleTime = 3010;

export const showBanner = throttle(function ({
  withTime,
  time,
  message,
  manual,
  visible,
}) {
  if (time !== throttleTime - 10 && typeof time !== "undefined") {
    throttleTime = time + 10;
  }

  if (manual && visible) {
    store.dispatch(openBanner({ visible: true, message: message }));
  }
  if (manual && visible === false) {
    store.dispatch(openBanner({ visible: false, message: "..." }));
  }
  if (withTime) {
    store.dispatch(openBanner({ visible: true, message: message }));
    setTimeout(function hideBanner() {
      store.dispatch(openBanner({ visible: false, message: message }));
    }, time);
  }
},
throttleTime);

export default function Banner(props) {
  const { lottieStyle, bannerTextStyle, bannerViewStyle } = styles();
  const { bannerText, visible } = props;

  const mapIsLoaded = useSelector((state) => state.mapIsLoadedHandler);

  const animated = visible
    ? useRef(new Animated.Value(0)).current
    : useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: props.visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [props.visible]);

  const animatedStyle = {
    transform: [
      {
        scaleY: animated.interpolate({
          inputRange: [0, 25, 50, 75, 100],
          outputRange: [0, 25, 50, 75, 100],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[bannerViewStyle, animatedStyle]}>
      {mapIsLoaded && (
        <LottieView style={lottieStyle} source={loadingLottie} autoPlay loop />
      )}
      {mapIsLoaded && <Text style={bannerTextStyle}>{bannerText}</Text>}
    </Animated.View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    lottieStyle: {
      position: "absolute",
      left: -20,
      top: 9,
      //marginTop: 28, //37
      width: 200, //30
      height: 200, //30
    },
    bannerViewStyle: {
      position: "absolute",
      zIndex: 5,
      top: -100,
      backgroundColor: theme.bannerBackgroundColor,
      opacity: 0.7,
      height: 150,
      width: SCREEN_WIDTH,
      flexDirection: "row",
    },
    bannerTextStyle: {
      fontSize: 17,
      fontFamily: theme.fontFamily,
      marginTop: 115,
      marginLeft: 90, //95,
      color: theme.bannerTextColor,
    },
    bannerImageStyle: {
      marginLeft: 10,
      marginTop: 118,
      width: 30,
      height: 15,
      resizeMode: "contain",
    },
  });
};
