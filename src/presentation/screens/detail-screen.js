import React from "react";
import MapViewCreateLine from "../components/mapviews/map-view-create-line";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import StartButton from "../components/buttons/start-button";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import { getTheme } from "../theme/themes";
import ElevationChart from "../components/elevation-chart";
import WeatherWidget from "../components/weather-widget";
import WalkAnotherTimeButton from "../components/buttons/walk-another-time-button";

export default function DetailScreen({ navigation }) {
  const {
    textStyle,
    subTextStyle,
    containerStyle,
    activityIndicatorStyle,
    widgetContainerStyle,
    mapViewStyle,
  } = styles();
  const { markerRegionZoomedIn, isLoaded, rawLineData } = useSelector(
    (state) => state.selectedLineDraftHandler
  );

  const { distance, elevationPoints, title } = rawLineData;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}> {"Line Review"} </Text>
      {isLoaded == true ? (
        <Text style={subTextStyle}> {title} </Text>
      ) : (
        <ActivityIndicator
          animating={true}
          color={activityIndicatorStyle}
          size={"large"}
        />
      )}

      {isLoaded == true ? (
        <ElevationChart
          distance={distance}
          elevationPoints={elevationPoints}
        ></ElevationChart>
      ) : (
        <ActivityIndicator
          animating={true}
          color={activityIndicatorStyle}
          size={"large"}
        />
      )}

      <View style={widgetContainerStyle}>
        <View style={mapViewStyle}>
          {isLoaded == true ? (
            <MapViewCreateLine
              initialRegion={markerRegionZoomedIn}
              mapType={"mutedStandard"}
            >
              {" "}
            </MapViewCreateLine>
          ) : (
            <ActivityIndicator
              animating={true}
              color={activityIndicatorStyle}
              size={"large"}
            />
          )}
        </View>
        <WeatherWidget></WeatherWidget>
      </View>

      <StartButton navigation={navigation}> </StartButton>
      <WalkAnotherTimeButton navigation={navigation}></WalkAnotherTimeButton>
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
      marginLeft: 13,
      flexDirection: "row",
      alignSelf: "center",
      width: SCREEN_WIDTH - 242,
      height: 165,
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: "#FF616D",
    },
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.primaryColor,
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
      marginTop: 20,
      marginLeft: 20,
      fontSize: 25,
      color: theme.textColor,
      textAlign: "left",
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
