import React from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import { getTheme } from "../theme/themes";

export default function ElevationChart({ elevationPoints, distance }) {
  const _distance = distance;
  const _elevationPoints = elevationPoints;

  const { chartContainerStyle, chartStyle } = styles();

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <View style={chartContainerStyle}>
      <LineChart
        data={{
          labels: [`Distance: ${_distance}m`],
          legend: ["Elevation"],
          datasets: [
            {
              data: _elevationPoints,
            },
          ],
        }}
        width={SCREEN_WIDTH - 57}
        height={200}
        yAxisSuffix="m"
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={chartStyle}
      />
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    chartContainerStyle: {
      flex: 2,
      marginTop: 20,
      marginBottom: 38,
      height: 100,
    },
    chartStyle: {
      fontFamily: theme.fontFamily,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
      borderRadius: 16,
    },
  });
};
