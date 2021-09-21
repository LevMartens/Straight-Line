import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { useSelector } from "react-redux";
import { LineChart } from "react-native-chart-kit";
import MarkerSvgComponent from "../svg-components/marker-svg";

export default function LiveDataModalComponent() {
  const {
    textStyle2,
    textStyle1,
    buttonStyle,
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
      <View style={chartContainerStyle}>
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
            console.log(
              "TEST: index getDotsProps " + index + " value " + value
            );
            if (index === 1) {
              return {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              };
            }
          }}
          width={SCREEN_WIDTH - 57}
          height={100}
          chartConfig={chartConfig}
          bezier
          style={chartStyle}
        />
      </View>
      <View style={{ marginTop: 20, flex: 1, flexDirection: "row" }}>
        <Text style={textStyle2}>Distance travelled</Text>
        <Text style={textStyle1}>2345m / 5000m</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={textStyle2}>Accuracy </Text>
        <Text style={textStyle1}>93%</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={textStyle2}>Current band </Text>
        <Text style={textStyle1}>Gold</Text>
      </View>
      <View
        style={{
          marginBottom: 50,
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={buttonStyle} onPress={() => {}}>
          <Text style={buttonTextStyle}>{"Stop Recording"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      marginTop: 20,
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
      flex: 2,
      marginTop: 40,
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
