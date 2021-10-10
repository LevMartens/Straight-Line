import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { submitNewPassword } from "../../../domain/use_cases/user-forgot-password-submit";
import { getTheme } from "../../theme/themes";
import LogoSvgComponent from "../svg-components/logo-white-svg";
import ActivityIndicatorOnTransparentView from "../activity-indicator-transparent-view.js.js";

export default function PasswordRecoverySubmitForm({ backToLogin }) {
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

  const [usernameError, setUsernameError] = useState("no error");
  const [username, onChangeUsername] = useState();

  const [codeError, setCodeError] = useState("no error");
  const [code, onChangeCode] = useState();

  const [newPasswordError, setNewPasswordError] = useState("no error");
  const [newPassword, onChangeNewPassword] = useState();

  const [loadingVisible, setLoadingVisible] = useState(false);

  return (
    <View style={container}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}

      <View>
        <LogoSvgComponent
          style={{ position: "absolute", left: SCREEN_WIDTH - 285, top: 10 }}
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

        <Text style={textStyle3}> {"Verification code"} </Text>
        <TextInput
          style={{
            ...textInputStyle,
            borderColor: codeError === "no error" ? "gray" : "red",
          }}
          onChangeText={(text) => onChangeCode(text)}
          value={code}
        />
        <Text style={textStyleError}>
          {codeError === "no error" ? "" : `* ${codeError}`}
        </Text>
        <Text style={textStyle3}> {"New password"} </Text>
        <TextInput
          style={{
            ...textInputStyle,
            borderColor: newPasswordError === "no error" ? "gray" : "red",
          }}
          secureTextEntry={true}
          onChangeText={(text) => onChangeNewPassword(text)}
          value={newPassword}
        />
        <Text style={textStyleError}>
          {newPasswordError === "no error" ? "" : `* ${newPasswordError}`}
        </Text>

        <TouchableOpacity
          style={buttonStyle}
          onPress={async () => {
            setLoadingVisible(true);
            const { status, type, message } = await submitNewPassword(
              username,
              code,
              newPassword
            );

            if (status === "successful") {
              setLoadingVisible(false);
              backToLogin();
            }

            if (status === "error") {
              setLoadingVisible(false);
              switch (type) {
                case "username":
                  setUsernameError(message);
                  break;
                case "password":
                  setNewPasswordError(message);
                  break;
                case "code":
                  setCodeError(message);
                  break;
                case "general":
                  setUsernameError(message);
                  break;
              }
            }
          }}
        >
          <Text style={textStyle4}>{"Submit"}</Text>
        </TouchableOpacity>
      </View>
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
      marginBottom: 10,
      marginLeft: 15,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle3: {
      marginTop: 10,
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
