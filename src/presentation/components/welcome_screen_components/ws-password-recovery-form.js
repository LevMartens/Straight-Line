import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import { sendForgotPasswordCode } from "../../../domain/use_cases/user-forgot-password-code";
import { getTheme } from "../../theme/themes";
import PasswordRecoverySubmitForm from "./ws-password-recovery-submit-form";
import LogoSvgComponent from "../_re-useables/svg_components/logo-white-svg";
import ActivityIndicatorOnTransparentView from "../_re-useables/activity-indicator-transparent-view.js.js";

export default function PasswordRecoveryForm({ backToLogin }) {
  const {
    container,
    textStyle2,
    textStyle1,
    textStyle3,
    textStyle4,
    buttonStyle,
    textStyleError,
    textInputStyle,
  } = styles();
  const [usernameError, setUsernameError] = useState("no error");
  const [username, onChangeUsername] = useState();
  const [recoverySubmitVisible, setRecoverySubmitVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  return (
    <View style={container}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      {recoverySubmitVisible ? (
        <PasswordRecoverySubmitForm
          backToLogin={backToLogin}
        ></PasswordRecoverySubmitForm>
      ) : (
        <View>
          <LogoSvgComponent
            style={{ position: "absolute", left: SCREEN_WIDTH - 255, top: 10 }}
          ></LogoSvgComponent>
          <Text style={textStyle1}> {"Password"} </Text>
          <Text style={textStyle2}> {"Recovery"} </Text>

          <Text style={textStyle3}> {"Username"} </Text>
          <TextInput
            style={{
              ...textInputStyle,
              borderColor: usernameError === "no error" ? "gray" : "red",
            }}
            onChangeText={(text) => onChangeUsername(text)}
            value={username}
          />
          <Text style={textStyleError}>
            {usernameError === "no error" ? "" : `* ${usernameError}`}
          </Text>

          <TouchableOpacity
            style={buttonStyle}
            onPress={async () => {
              setLoadingVisible(true);
              const { status, message } = await sendForgotPasswordCode(
                username
              );

              if (status === "successful") {
                setLoadingVisible(false);
                setRecoverySubmitVisible(true);
              }
              if (status === "error") {
                setLoadingVisible(false);
                setUsernameError(message);
              }
            }}
          >
            <Text style={textStyle4}>{"Send code"}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textInputStyle: {
      width: SCREEN_WIDTH - 65,
      paddingLeft: 8,
      marginLeft: 30,
      marginTop: 5,
      height: 50,
      borderRadius: 10,
      borderColor: "gray",
      borderWidth: 1,
      fontSize: 18,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
    },
    textStyleError: {
      marginLeft: 30,
      fontSize: 12,
      color: theme.textColorError,
      textAlign: "left",
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
