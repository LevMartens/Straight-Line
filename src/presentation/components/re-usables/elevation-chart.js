import React from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import { getTheme } from "../../theme/themes";
import SizedBox from "../../components/re-usables/sized-box";

export default function ElevationChart({ elevationPoints, distance }) {
  const _distance = distance;
  const _elevationPoints = elevationPoints;

  const { chartContainerStyle, chartStyle } = styles();

  const chartConfig = {
    backgroundColor: "#313131", //"#2e4f13", //"#e26a00", //
    backgroundGradientFrom: "#313131", //"#fb8c00", //
    backgroundGradientTo: "#313131", //"#5a5a5a", //"#ffa726",//
    decimalPlaces: 0,

    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //`rgba( 251, 140, 4, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "2", //6
      strokeWidth: "2", //2
      stroke: "#fc9c04", //"#fb8c04", //"#fc3c04", //"#fc3c04", //"#64844c", //"#fc3c04", //"#fff", //"#fc9c04", //"#fff", //"#ffa726",
    },
  };

  return (
    <View style={chartContainerStyle}>
      <LineChart
        data={{
          //labels: ["Elevation"],
          //labels: [`Distance: ${_distance}m`],
          legend: ["Elevation"],
          datasets: [
            {
              data: _elevationPoints,
            },
          ],
        }}
        width={SCREEN_WIDTH - 45} //- 45
        height={150} //200 180
        yAxisSuffix="m  "
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={chartStyle}
      />
      {/* <SizedBox width={50} height={50}></SizedBox> */}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    chartContainerStyle: {
      //backgroundColor: "green",
      alignSelf: "center",
      //justifyContent: "flex-start",
      //paddingLeft: 20,
      flex: 1.7, //1.5,
      //marginTop: 20,
      //marginBottom: 38,
      //height: 100,
      width: SCREEN_WIDTH - 45,
      borderRadius: 16,
    },
    chartStyle: {
      fontFamily: theme.fontFamily,
      //paddingLeft: 0,
      justifyContent: "center",
      alignItems: "center",
      //marginTop: 12,
      //paddingTop: 10,
      borderRadius: 16,
    },
  });
};
