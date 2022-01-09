import React from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import { getTheme } from "../../theme/themes";

export default function ElevationChart({ elevationPoints }) {
  const _elevationPoints = elevationPoints;

  const { chartContainerStyle, chartStyle } = styles();

  const chartConfig = {
    backgroundColor: "#313131",
    backgroundGradientFrom: "#313131",
    backgroundGradientTo: "#313131",
    decimalPlaces: 0,

    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "2",
      strokeWidth: "2",
      stroke: "#fc9c04",
    },
  };

  return (
    <View style={chartContainerStyle}>
      <LineChart
        data={{
          legend: ["Elevation"],
          datasets: [
            {
              data: _elevationPoints,
            },
          ],
        }}
        width={SCREEN_WIDTH - 45}
        height={150}
        yAxisSuffix="m  "
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
      alignSelf: "center",
      flex: 1.7,
      width: SCREEN_WIDTH - 45,
      borderRadius: 16,
    },
    chartStyle: {
      fontFamily: theme.fontFamily,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
    },
  });
};
