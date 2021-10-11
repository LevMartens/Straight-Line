import React, { useState, useEffect, useRef } from "react";
import MapViewCreateLine from "../components/mapviews/map-view-create-line";
import { ActivityIndicator } from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
} from "react-native";
import StartButton from "../components/buttons/start-button";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import { getTheme } from "../theme/themes";
import ElevationChart from "../components/elevation-chart";
import WeatherWidget from "../components/weather-widget";
import WalkAnotherTimeButton from "../components/buttons/walk-another-time-button";
import MapViewLineReview from "../components/mapviews/map-view-line-review";
import DeviationSvgComponent from "../components/svg-components/deviation";
import TimeSvgComponent from "../components/svg-components/time";
import DifficultySvgComponent from "../components/svg-components/difficulty";
import { createPublicLine } from "../../domain/use_cases/create-public-line";

export default function PracticeScreen({ navigation }) {
  const {
    textStyle,
    textStyle1,
    textStyle2,
    textStyle3,
    textStyle4,
    textStyle5,
    textStyle6,
    textStyle7,
    textStyle8,
    subTextStyle,
    containerStyle,
    activityIndicatorStyle,
    widgetContainerStyle,
    mapViewStyle,
  } = styles();

  const [textInputVisible, setTextInputVisible] = useState(false);
  const [searchInput, onChangeSearchInput] = useState();

  const animated = textInputVisible
    ? new Animated.Value(0)
    : new Animated.Value(1);

  const animated1 = textInputVisible
    ? new Animated.Value(0)
    : new Animated.Value(150);

  useEffect(() => {
    Animated.timing(animated, {
      toValue: textInputVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(animated1, {
      toValue: textInputVisible ? 150 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [textInputVisible]);

  const animatedStyle = {
    height: 80,

    transform: [
      {
        scaleX: animated.interpolate({
          inputRange: [0, 25, 50, 75, 100],
          outputRange: [0, 25, 50, 75, 100],
        }),
      },
    ],
  };
  const animatedStyle1 = {
    height: 80,

    transform: [
      {
        translateX: animated1.interpolate({
          inputRange: [0, 25, 50, 75, 100],
          outputRange: [0, 25, 50, 75, 100],
        }),
      },
    ],
  };

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            {
              width: 300,
              height: 100,
              backgroundColor: "red",
              top: 250,
              left: -150,
            },
            animatedStyle,
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            {
              height: 30,
              width: 30,
              backgroundColor: "purple",
              position: "absolute",
              top: 250,
              left: 0,
            },
            animatedStyle1,
          ]}
        ></Animated.View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (textInputVisible) {
            setTextInputVisible(false);
          } else {
            setTextInputVisible(true);
          }
        }}
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      ></TouchableOpacity>
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    activityIndicatorStyle: {
      color: theme.buttonColor,
    },

    mapViewStyle: {
      marginTop: 20,
      //marginLeft: 13,
      flexDirection: "row",
      alignSelf: "center",
      width: SCREEN_WIDTH - 50,
      height: 265,
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: "#FF616D",
    },
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.primaryColor,
      //justifyContent: "center",
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
    widgetContainerStyle: {
      marginTop: 35,
      justifyContent: "space-evenly",
      alignSelf: "center",
      width: SCREEN_WIDTH,
      flex: 2,
      flexDirection: "row",
      height: 100,
    },

    textStyle: {
      marginTop: 70,
      marginLeft: 20,
      fontSize: 25,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      marginTop: 50,
      marginLeft: 20,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle2: {
      //marginTop: 20,
      marginLeft: 15,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle3: {
      //marginTop: 20,

      //marginLeft: 20,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle4: {
      //alignSelf: "center",
      marginRight: 10,
      marginLeft: 20,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle5: {
      //alignSelf: "center",
      //flex: 1,
      position: "absolute",
      right: 30,
      //marginTop: 70,
      //marginLeft: 60,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "right",
      fontFamily: theme.fontFamily,
    },
    textStyle6: {
      //marginTop: 20,

      //marginLeft: 20,
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle7: {
      //marginTop: 20,

      marginRight: 2,
      fontSize: 12,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle8: {
      //alignSelf: "center",
      //flex: 1,
      //   position: "absolute",
      //   right: 30,
      marginTop: 20,
      //marginLeft: 60,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "right",
      fontFamily: theme.fontFamily,
    },
    subTextStyle: {
      marginTop: 5,
      marginBottom: 10,
      marginLeft: 23,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.secFontFamily,
    },
  });
};
