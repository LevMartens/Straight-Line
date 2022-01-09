import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import { getWeatherData } from "../../../domain/use_cases/get-weather-data";
import { getTheme } from "../../theme/themes";
import NothingFoundSvgComponent from "./svg_components/nothing-found-svg";
import RainDropsSvgComponent from "./svg_components/weather/rain-drops-svg";
import WindSvgComponent from "./svg_components/weather/wind-svg";
import SizedBox from "./sized-box";

export default function WeatherWidget() {
  const {
    weatherStyle,
    text1Style,
    text2Style,
    text3Style,
    textStyleError,
    windStyle,
    rainStyle,
    tempratureStyle,
  } = styles();

  // const { markerCoordinates } = useSelector(
  //   (state) => state.selectedLineDraftHandler
  // );

  const {
    selectedLineDraft: { markerCoordinates },
  } = useSelector((state) => state.lineDataHandler);

  const {
    weatherDataError,
    weatherDataLoaded,
    icon,
    temprature,
    percentageRain,
    windSpeed,
  } = useSelector((state) => state.weatherDataHandler);

  useEffect(() => {
    getWeatherData(markerCoordinates);
  }, []);

  return weatherDataLoaded ? (
    <View style={weatherStyle}>
      <View style={tempratureStyle}>
        <View
          style={{
            flex: 1,
            marginLeft: 5,
            justifyContent: "center",
          }}
        >
          {icon}
        </View>
        <SizedBox width={5} height={10}></SizedBox>
        <Text style={text1Style}>{`${temprature}°`}</Text>
      </View>
      <View style={rainStyle}>
        <RainDropsSvgComponent></RainDropsSvgComponent>
        <Text style={text2Style}> {`${percentageRain} %    `} </Text>
      </View>

      <View style={windStyle}>
        <WindSvgComponent></WindSvgComponent>
        <Text style={text3Style}> {`${windSpeed} km/h`} </Text>
      </View>
    </View>
  ) : weatherDataError ? (
    <View style={weatherStyle}>
      <NothingFoundSvgComponent
        style={{ alignSelf: "center" }}
      ></NothingFoundSvgComponent>
      <Text style={textStyleError}>
        {`Sorry we couldn't fetch any weather data.`}
      </Text>
    </View>
  ) : (
    <View style={weatherStyle}>
      <Text style={textStyleError}> {`Loading...`} </Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    windStyle: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 2,
      marginBottom: 5,
      paddingLeft: 15,
    },
    rainStyle: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 2,
      marginBottom: 5,
      paddingLeft: 22,
    },
    tempratureStyle: {
      marginTop: 5,
      flexDirection: "row",
      flex: 4,
    },
    weatherStyle: {
      justifyContent: "center",
      flexDirection: "column",
      alignSelf: "center",
      width: SCREEN_WIDTH - 242,
      height: 165,
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: theme.secondaryColor,
    },
    text1Style: {
      marginRight: 8,
      marginTop: 10,
      fontSize: 40,
      color: theme.textColor,
      width: 80,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    text2Style: {
      marginRight: 9,
      marginLeft: 5,
      marginTop: 3,
      fontSize: 13,
      width: 60,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    text3Style: {
      marginLeft: 5,
      marginTop: 3,
      fontSize: 13,
      width: 60,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    textStyleError: {
      marginTop: 3,
      fontSize: 13,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
