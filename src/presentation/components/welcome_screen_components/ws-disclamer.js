import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";

export default function Disclamer({ termsOnPress, policyOnPress }) {
  const {
    buttonStyle,
    textStyle1,
    textStyle2,
    textStyle3,
    textStyle4,
    container,
  } = styles();

  return (
    <View style={container}>
      <Text style={textStyle1}>
        By continuing to use Straight Line Mission, you agree to our{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={buttonStyle} onPress={termsOnPress}>
          <Text style={textStyle2}>{"Terms of Service"}</Text>
        </TouchableOpacity>
        <Text style={textStyle3}> and </Text>
        <TouchableOpacity style={buttonStyle} onPress={policyOnPress}>
          <Text style={textStyle4}>{"Privacy Policy."}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle1: {
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyle2: {
      textDecorationLine: "underline",
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyle3: {
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyle4: {
      marginLeft: 3,
      textDecorationLine: "underline",
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    buttonStyle: {
      justifyContent: "center",
      alignSelf: "center",
    },

    container: {
      marginTop: 20,
      flexDirection: "column",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      width: SCREEN_WIDTH - 20,
      height: 80,
      position: "absolute",
      bottom: 0,
    },
  });
};
