import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Linking from "expo-linking";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { useSelector } from "react-redux";

export default function GetDirectionsModalComponent() {
  const { textStyle, buttonStyle, buttonTextStyle } = styles();

  const {
    rawLineData: {
      startingCoordinates: { lat: pointALat, lng: pointALng },
    },
  } = useSelector((state) => state.selectedLineDraftHandler);

  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${pointALat},${pointALng}`;
  const label = "Straight Line Start";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  return (
    <View>
      <Text style={textStyle}>Please move closer to the starting point or</Text>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <Text style={buttonTextStyle}>{"Get directions"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      marginTop: 30,
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    buttonTextStyle: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle: {
      fontSize: 18,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
  });
};
