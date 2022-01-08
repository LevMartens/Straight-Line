import React, { useState } from "react";
import MapViewCreateLine from "../components/create_line_screen_components/cl-map-view";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import StartButton from "../components/detail_screen_components/ds-start-button";
import { useSelector } from "react-redux";
import { SCREEN_WIDTH } from "../../domain/resources/operating_system/dimensions";
import { getTheme } from "../theme/themes";
import ElevationChart from "../components/_re-useables/elevation-chart";
import WeatherWidget from "../components/_re-useables/weather-widget";

import MapViewLineReview from "../components/line_review_screen_components/lr-map-view";
import DeviationSvgComponent from "../components/_re-useables/svg_components/deviation";
import TimeSvgComponent from "../components/_re-useables/svg_components/time";
import DifficultySvgComponent from "../components/_re-useables/svg_components/difficulty";
import { createPublicLine } from "../../domain/use_cases/create-public-line";
import DescriptionSvgComponent from "../components/_re-useables/svg_components/description-svg";

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
    text45,
    textBox45,
  } = styles();

  // const lineDraft = useSelector((state) => state.selectedLineDraftHandler);
  const { selectedLineDraft } = useSelector(
    (state) => state.selectedLineDraftHandler
  );

  const { markerRegionZoomedIn, isLoaded, rawLineData } = selectedLineDraft;
  const path = useSelector((state) => state.pathHandler);
  const { userFinished, score, largestDeviation, time, band } = useSelector(
    (state) => state.finishedLineHandler
  );
  const { hasDifficulty, difficulty } = useSelector(
    (state) => state.difficultyHandler
  );
  //Totaltime/difficultylvl/largestdeviation/score/bandhandler

  const { distance, elevationPoints, title } = rawLineData;

  const [description, setDescription] = useState(
    "It's here. The eagerly anticipated Test line 3, created by myself Lev the Dev, who was hungrier than ever for straight line success. However, with our longest, most dangerous and action packed line to date waiting patiently for us over the border, the nerves were real. Even with meticulous planning and logistics."
  );

  const truncatedDescription =
    description.length > 190
      ? description.substring(0, 190) + " (...)"
      : description;

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
                backgroundColor:
                  band === "Platinum"
                    ? "#90caf9"
                    : band === "Gold"
                    ? "#fc9c04"
                    : band === "Silver"
                    ? "#d3d3d3"
                    : band === "Bronze"
                    ? "#cd8032"
                    : "#BE0000",
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
              height: 150, //60,
              width: 360,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 20,
                top: 10,
              }}
            >
              <DescriptionSvgComponent></DescriptionSvgComponent>
            </View>

            <Text style={text45}>Description</Text>
            <Text style={textBox45}>{`${truncatedDescription}`}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              //justifyContent: "center",
              marginTop: 20,
              alignSelf: "center",
              backgroundColor: "#313131",
              height: 50, //60,
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
              height: 50, //60,
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
              height: 50, //60,
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
              height: 50, //60,
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
                band,
                description
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
    text45: {
      // marginRight: 10,
      // marginLeft: 20,
      position: "absolute",
      top: 25,
      left: 80,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    activityIndicatorStyle: {
      color: theme.buttonColor,
    },

    mapViewStyle: {
      marginTop: 20,
      //marginLeft: 13,
      flexDirection: "row",
      alignSelf: "center",
      width: SCREEN_WIDTH - 50,
      height: 150, //265,
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
    textBox45: {
      //alignSelf: "center",
      //flex: 1,
      position: "absolute",
      left: 20,
      top: 70,
      //marginTop: 70,
      //marginLeft: 60,
      width: SCREEN_WIDTH - 100,
      fontSize: 14,
      color: theme.textColor,
      textAlign: "left",
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
