import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { getTheme } from "../theme/themes";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import LottieView from "lottie-react-native";
import confetti from "../../../assets/confetti.json";
import DifficultySvgComponent from "./svg-components/difficulty";
import HelpSvgComponent from "./svg-components/help-svg";

export default function AddDifficultyAlert({ navigation }) {
  const {
    textStyle,
    lottieStyle,
    textStyleB,
    buttonStyle,
    containerStyle,
    container1,
    textStyle1,
    textInputStyle,
    textStyle2,
    buttonStyle4,
  } = styles();

  //const [showButton, setShowButton] = useState(false);
  const [value, onChangeText] = useState("");

  useEffect(() => {
    // setTimeout(() => {
    //   setShowButton(true);
    // }, 2000);
  }, []);

  return (
    <View style={containerStyle}>
      <View style={container1}>
        <Text style={textStyle1}>Rate line difficulty</Text>
        <TouchableOpacity style={buttonStyle4} onPress={() => {}}>
          {/* <Text style={textStyle2}>{"How?"}</Text> */}
          <HelpSvgComponent></HelpSvgComponent>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", marginRight: 40, marginBottom: 30 }}
        >
          <View>
            <DifficultySvgComponent></DifficultySvgComponent>
          </View>
          <TextInput
            style={textInputStyle}
            onChangeText={(text) => onChangeText(text)}
            maxLength={3}
            value={value.toLowerCase()}
          />
        </View>
        <TouchableOpacity style={buttonStyle} onPress={() => {}}>
          <Text style={textStyleB}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={textStyle}>You finished your line mission!</Text>
      {showButton === true ? (
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => {
            navigation.navigate("LINE_REVIEW");
          }}
        >
          <Text style={textStyleB}>Review line</Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      {showButton === false && (
        <LottieView
          style={lottieStyle}
          source={confetti}
          autoPlay
          loop={false}
        />
      )} */}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle4: {
      position: "absolute",
      top: 10,
      right: 10,
      //flex: 1,
      // marginTop: 20,
      // paddingTop: 12,
      // flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      //backgroundColor: theme.buttonColor,
      //width: SCREEN_WIDTH - 80,
      //height: 50,
      //borderRadius: 16,
    },
    textStyle2: {
      textDecorationLine: "underline",
      marginLeft: 3,
      //marginHorizontal: 20,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textInputStyle: {
      //marginBottom: 20,
      marginTop: 3,
      width: 70,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      fontFamily: theme.fontFamily,
      fontSize: 25,
      textAlign: "center",
      color: "white",
    },
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      zIndex: 99999,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    container1: {
      //position: "absolute",
      //...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      height: 220,
      width: 250,
      //flex: 1,
      zIndex: 99999,
      backgroundColor: theme.primaryColor,
      borderRadius: 16,
    },
    buttonStyle: {
      paddingTop: 12,
      position: "absolute",
      bottom: 10,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: 150,
      height: 50,
      borderRadius: 16,
    },
    textStyleB: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      position: "absolute",
      top: 10,
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    lottieStyle: {
      zIndex: 88,
      ...StyleSheet.absoluteFillObject,
    },
    textStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 25,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
