import React, { useEffect } from "react";
import MapViewCreateLine from "../components/create_line_screen_components/cl-map-view";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import StartButton from "../components/detail_screen_components/ds-start-button";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../domain/resources/operating_system/dimensions";
import { getTheme } from "../theme/themes";
import ElevationChart from "../components/_re-useables/elevation-chart";
import WeatherWidget from "../components/_re-useables/weather-widget";
import WalkAnotherTimeButton from "../components/detail_screen_components/ds-walk-another-time-button";
import MapViewDetailScreen from "../components/detail_screen_components/ds-map-view";

export default function DetailScreen({ navigation }) {
  const {
    textStyle,
    subTextStyle,
    textStyle1,
    textStyle2,
    containerStyle,
    activityIndicatorStyle,
    widgetContainerStyle,
    mapViewStyle,
  } = styles();

  const { markerRegionZoomedIn, isLoaded, rawLineData } = useSelector(
    (state) => state.selectedLineDraftHandler
  );

  const { distance, elevationPoints, title } = rawLineData;

  const distanceInKilometers = (distance / 1000).toFixed(1); //Math.round((distance / 1000) * 10) / 10; //

  return (
    <View style={containerStyle}>
      <Text style={textStyle}> {"Line Draft"} </Text>
      {isLoaded == true ? (
        <Text style={subTextStyle}> {title} </Text>
      ) : (
        <ActivityIndicator
          animating={true}
          color={activityIndicatorStyle}
          size={"large"}
        />
      )}
      <Text style={textStyle1}> {"Distance"} </Text>
      <Text style={textStyle2}>
        {distance >= 1000 ? `${distanceInKilometers}km` : `${distance}m`}
      </Text>
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
            <MapViewDetailScreen
              initialRegion={markerRegionZoomedIn}
              mapType={"satellite"}
            >
              {" "}
            </MapViewDetailScreen>
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
      {/* <View
        style={{
          marginTop: 20,
          alignSelf: "center",
          backgroundColor: "#313131",
          height: 2,
          width: SCREEN_WIDTH - 50,
          borderRadius: 16,
        }}
      ></View> */}
      <View
        style={{
          //alignItems: "flex-start",
          flex: 1.5,
          //backgroundColor: "purple",
        }}
      >
        <StartButton navigation={navigation}> </StartButton>
        <WalkAnotherTimeButton navigation={navigation}></WalkAnotherTimeButton>
      </View>
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
      //marginLeft: 13,
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
      //backgroundColor: "red",
      //marginTop: 35,
      paddingBottom: 5,
      justifyContent: "space-evenly",
      alignSelf: "center",
      width: SCREEN_WIDTH,
      flex: 2.0, //2.4
      flexDirection: "row",
      height: 100,
    },

    textStyle: {
      marginTop: 20,
      marginLeft: 17,
      fontSize: 25,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      marginTop: 30, //50,
      marginLeft: 20,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle2: {
      //marginTop: 20,
      marginBottom: 3, //10,
      marginLeft: 22,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    subTextStyle: {
      marginTop: 5,
      //marginBottom: 10,
      marginLeft: 19,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.secFontFamily,
    },
  });
};
