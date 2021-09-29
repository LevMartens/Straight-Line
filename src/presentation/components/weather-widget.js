import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import { getTheme } from "../theme/themes";

export default function WeatherWidget() {
  const { weatherStyle, text1Style, text2Style, text3Style } = styles();

  return (
    <View style={weatherStyle}>
      <View
        style={{
          marginTop: 5,
          marginLeft: 7,
          flexDirection: "row",
          flex: 4,
        }}
      >
        <Image
          source={require("../../../assets/sunny.png")}
          style={{
            width: 80,
            height: 80,
          }}
          resizeMode="contain"
        />
        <Text style={text1Style}>{"18°"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 2,
          marginTop: 7,
        }}
      >
        <Image
          source={require("../../../assets/rain.png")}
          style={{
            //flex: 1,
            width: 25,
            height: 25,
          }}
          resizeMode="contain"
        />
        <Text style={text2Style}> {"10 %"} </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 2,
          marginBottom: 5,
        }}
      >
        <Image
          source={require("../../../assets/wind.png")}
          style={{
            width: 25,
            height: 25,
          }}
          resizeMode="contain"
        />
        <Text style={text3Style}> {"23 Km"} </Text>
      </View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    weatherStyle: {
      //marginRight: 13,
      justifyContent: "center",
      flexDirection: "column",
      alignSelf: "center",
      width: SCREEN_WIDTH - 242,
      height: 165,
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: theme.secondaryColor,
    },
    text1Style: {
      marginRight: 15,
      marginTop: 10,
      fontSize: 50,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    text2Style: {
      marginRight: 9,
      marginLeft: 5,
      marginTop: 3,
      fontSize: 13,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    text3Style: {
      marginLeft: 3,
      marginTop: 3,
      fontSize: 13,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
  });
};
