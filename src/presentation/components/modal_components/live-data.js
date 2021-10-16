import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import { useSelector } from "react-redux";
import { LineChart } from "react-native-chart-kit";
import MarkerSvgComponent from "../svg_components/marker-svg";

export default function LiveDataModalComponent() {
  const {
    textStyle2,
    textStyle1,
    buttonStyle,
    buttonStyle1,
    buttonTextStyle,
    chartContainerStyle,
    chartStyle,
  } = styles();

  const {
    rawLineData: {
      distance,
      elevationPoints,
      startingCoordinates: { lat: pointALat, lng: pointALng },
      finishCoordinates: { lat: pointBLat, lng: pointBLng },
    },
  } = useSelector((state) => state.selectedLineDraftHandler);

  const positionWatcher = useSelector((state) => state.positionWatcherHandler);

  const pointA = {
    latitude: pointALat,
    longitude: pointALng,
  };

  const pointB = {
    latitude: pointBLat,
    longitude: pointBLng,
  };

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <View>
      <View
        style={{
          //width: SCREEN_WIDTH - 57,
          marginTop: 40,
          marginLeft: 30,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Distance travelled</Text>
        <Text style={textStyle1}>2345m / 5000m</Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          //width: SCREEN_WIDTH - 57,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Accuracy </Text>
        <Text style={textStyle1}>93%</Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          //width: SCREEN_WIDTH - 57,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Largest deviation </Text>
        <Text style={textStyle1}>11m</Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          //width: SCREEN_WIDTH - 57,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={textStyle2}>Current band </Text>
        <Text style={textStyle1}>Gold</Text>
      </View>
      {/* <View style={chartContainerStyle}>
        <LineChart
          data={{
            datasets: [
              {
                data: elevationPoints,
              },
            ],
          }}
          formatYLabel={() => ""}
          renderDotContent={({ x, y, index, indexData }) => {
            if (index === 9) {
              return (
                <View
                  key={index}
                  style={{
                    position: "absolute",
                    paddingTop: y - 20,
                    paddingLeft: x - 15,
                  }}
                >
                  <MarkerSvgComponent></MarkerSvgComponent>
                </View>
              );
            }
          }}
          getDotProps={(value, index) => {
            if (index === 1) {
              return {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              };
            }
          }}
          width={SCREEN_WIDTH - 157}
          height={80}
          chartConfig={chartConfig}
          bezier
          style={chartStyle}
        />
      </View> */}
      <View
        style={{
          alignSelf: "center",
          width: SCREEN_WIDTH,
          // position: "absolute",
          // top: 40,
          //height: 80,
          marginBottom: 20,
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={buttonStyle} onPress={() => {}}>
          <Text style={buttonTextStyle}>{"Elevation map"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle1} onPress={() => {}}>
          <Text style={buttonTextStyle}>{"Switch map"}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          width: SCREEN_WIDTH,
          // position: "absolute",
          // top: 40,
          marginBottom: 60,
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={buttonStyle} onPress={() => {}}>
          <Text style={buttonTextStyle}>{"Stop Recording"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle1} onPress={() => {}}>
          <Text style={buttonTextStyle}>{"Switch ring"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      position: "absolute",
      top: 10,
      left: 20,
      //marginTop: 20,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 250,
      height: 40,
      borderRadius: 16,
    },
    buttonStyle1: {
      position: "absolute",
      top: 10,
      right: 20,
      //marginTop: 20,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 250,
      height: 40,
      borderRadius: 16,
    },
    buttonTextStyle: {
      fontSize: 16,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle: {
      flex: 0.5,
      marginTop: 30,
      textAlign: "center",
      fontSize: 16,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      flex: 1,
      textAlign: "center",
      fontSize: 16,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    textStyle2: {
      flex: 1,
      textAlign: "left",
      fontSize: 16,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    chartContainerStyle: {
      width: SCREEN_WIDTH - 57,
      flex: 2,
      //marginTop: 10,
      marginBottom: 30,
    },
    chartStyle: {
      paddingRight: 15,
      fontFamily: theme.fontFamily,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
      borderRadius: 16,
    },
  });
};
