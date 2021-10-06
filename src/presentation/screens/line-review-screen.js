import React from "react";
import MapViewCreateLine from "../components/mapviews/map-view-create-line";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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

export default function LineReviewScreen({ navigation }) {
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

  const lineDraft = useSelector((state) => state.selectedLineDraftHandler);

  const { markerRegionZoomedIn, isLoaded, rawLineData } = lineDraft;
  const path = useSelector((state) => state.pathHandler);
  const { userFinished, score, largestDeviation, time, band } = useSelector(
    (state) => state.finishedLineHandler
  );
  const { hasDifficulty, difficulty } = useSelector(
    (state) => state.difficultyHandler
  );
  //Totaltime/difficultylvl/largestdeviation/score/bandhandler

  const { distance, elevationPoints, title } = rawLineData;

  return (
    <View style={containerStyle}>
      {userFinished && (
        <View>
          <Text style={textStyle}> {"Line Review"} </Text>
          <Text style={textStyle1}> {"Score"} </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={textStyle2}> {`${score}`} </Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                backgroundColor: "#90caf9",
                borderRadius: 16,
                justifyContent: "center",
                height: 30,
                width: 115,
              }}
            >
              <Text style={textStyle3}> {`${band}`} </Text>
            </View>
          </View>

          <View style={mapViewStyle}>
            <MapViewLineReview
              initialRegion={markerRegionZoomedIn}
            ></MapViewLineReview>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              //justifyContent: "center",
              marginTop: 20,
              alignSelf: "center",
              backgroundColor: "#313131",
              height: 60,
              width: 360,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <DeviationSvgComponent></DeviationSvgComponent>
            </View>

            <Text style={textStyle4}>Largest deviation</Text>
            <Text style={textStyle5}>{`${largestDeviation}m`}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              //justifyContent: "center",
              marginTop: 20,
              alignSelf: "center",
              backgroundColor: "#313131",
              height: 60,
              width: 360,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <TimeSvgComponent></TimeSvgComponent>
            </View>

            <Text style={textStyle4}>Total time</Text>
            <Text style={textStyle5}>{time}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              //justifyContent: "center",
              marginTop: 20,
              alignSelf: "center",
              backgroundColor: "#313131",
              height: 60,
              width: 360,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <DifficultySvgComponent></DifficultySvgComponent>
            </View>

            <Text style={textStyle4}>Difficulty level</Text>

            {hasDifficulty ? (
              <View>
                <TouchableOpacity
                  style={{
                    //   position: "relative",
                    //   bottom: 0,
                    //flex: 1,
                    //marginTop: 40,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1f1f1f", //"#fc9c04",
                    height: 20,
                    //textAlign: "center",
                    width: 50,
                    borderRadius: 16,
                  }}
                >
                  <Text style={textStyle7}> {"change"} </Text>
                </TouchableOpacity>
                <Text style={textStyle5}>6b</Text>
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  //   position: "relative",
                  //   bottom: 0,
                  //flex: 1,
                  //marginTop: 40,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#1f1f1f", //"#fc9c04",
                  height: 20,
                  //textAlign: "center",
                  width: 50,
                  borderRadius: 16,
                }}
              >
                <Text style={textStyle7}> {"Add"} </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fc9c04",
              height: 60,
              width: 360,
              borderRadius: 16,
            }}
            onPress={() => {
              // save line to public lines
              createPublicLine(
                lineDraft,
                path,
                time,
                difficulty,
                largestDeviation,
                score,
                band
              );
              //Reset current line draft
              navigation.navigate("Explore");
            }}
          >
            <Text style={textStyle6}> {"Save"} </Text>
          </TouchableOpacity>
        </View>
      )}
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
