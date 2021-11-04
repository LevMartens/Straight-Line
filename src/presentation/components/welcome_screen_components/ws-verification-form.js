import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import { resendVerificationCode } from "../../../domain/use_cases/user-resend-verification";
import { verifyUser } from "../../../domain/use_cases/user-verification";
import { getTheme } from "../../theme/themes";
import LogoSvgComponent from "../svg_components/logo-white-svg";
import ActivityIndicatorOnTransparentView from "../activity-indicator-transparent-view.js.js";

export default function VerificationForm({ backToLogin, username }) {
  const {
    container,
    textStyle2,
    textStyle1,
    textStyle3,
    textStyle4,
    buttonStyle,
    textInputStyle,
    textStyleError,
  } = styles();

  const [code, onChangeCode] = useState();
  const [verificationError, setVerificationError] = useState("no error");
  const [isResent, setIsResent] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  return (
    <View style={container}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}

      <View>
        <LogoSvgComponent
          style={{ position: "absolute", left: SCREEN_WIDTH - 255, top: 10 }}
        ></LogoSvgComponent>
        <Text style={textStyle1}> {"Email"} </Text>
        <Text style={textStyle2}> {"Verification"} </Text>
        <Text style={textStyle3}> {"Varification code"} </Text>
        <TextInput
          style={{
            ...textInputStyle,
            borderColor: verificationError === "no error" ? "gray" : "red",
          }}
          onChangeText={(text) => onChangeCode(text)}
          value={code}
        />
        <Text
          style={{
            ...textStyleError,
            color: verificationError === "no error" ? "white" : "red",
          }}
        >
          {verificationError !== "no error"
            ? `* ${verificationError}`
            : isResent
            ? "* Check your email"
            : ""}
        </Text>

        <TouchableOpacity
          style={buttonStyle}
          onPress={async () => {
            setLoadingVisible(true);
            const { status, message } = await verifyUser(username, code);
            if (status === "successful") {
              setLoadingVisible(false);
              backToLogin();
            } else {
              setLoadingVisible(false);
              setVerificationError(message);
            }
          }}
        >
          <Text style={textStyle4}>{"Verify"}</Text>
        </TouchableOpacity>

        {isResent ? (
          <View style={{ height: 90 }}></View>
        ) : (
          <TouchableOpacity
            style={buttonStyle}
            onPress={async () => {
              const { error, successful, message } =
                await resendVerificationCode(username);

              if (successful) {
                setIsResent(true);
              }

              if (error) {
                setVerificationError(message);
              }
            }}
          >
            <Text style={textStyle4}>{"Re-send code"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyleError: {
      marginLeft: 30,
      fontSize: 12,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textInputStyle: {
      width: SCREEN_WIDTH - 65,
      marginLeft: 30,
      marginTop: 5,
      paddingLeft: 8,
      fontSize: 18,
      height: 50,
      borderRadius: 10,
      borderColor: "gray",
      borderWidth: 1,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },

    textStyle1: {
      marginTop: 180,
      marginLeft: 15,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle2: {
      marginLeft: 15,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle3: {
      marginTop: 30,
      marginLeft: 25,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    buttonStyle: {
      marginTop: 30,
      marginLeft: 30,
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 65,
      height: 50,
      borderRadius: 16,
    },
    textStyle4: {
      fontSize: 18,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
