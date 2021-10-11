import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { signInUser } from "../../../domain/use_cases/user-login";
import { resendVerificationCode } from "../../../domain/use_cases/user-resend-verification";
import { getTheme } from "../../theme/themes";
import PasswordRecoveryForm from "./ws-password-recovery-form";
import LogoSvgComponent from "../svg-components/logo-white-svg";
import VerificationForm from "./ws-verification-form";
import ActivityIndicatorOnTransparentView from "../activity-indicator-transparent-view.js.js";

export default function LoginForm({ setModalVisible, navigation }) {
  const {
    container,
    textStyle2,
    textStyle1,
    textStyle3,
    textStyle4,
    textStyle5,
    buttonStyle,
    forgotPasswordStyle,
    textStyleError,
    textInputStyle,
  } = styles();

  const [recoveryVisible, setRecoveryVisible] = useState(false);
  const [usernameError, setUsernameError] = useState("no error");
  const [passwordError, setPasswordError] = useState("no error");
  const [username, onChangeUsername] = useState();
  const [password, onChangePassword] = useState();
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  function backToLogin() {
    setRecoveryVisible(false);
  }
  return (
    <View style={container}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      {recoveryVisible ? (
        <PasswordRecoveryForm backToLogin={backToLogin}></PasswordRecoveryForm>
      ) : verificationVisible ? (
        <VerificationForm
          backToLogin={backToLogin}
          username={username}
        ></VerificationForm>
      ) : (
        <View>
          <LogoSvgComponent
            style={{ position: "absolute", left: SCREEN_WIDTH - 285, top: 10 }}
          ></LogoSvgComponent>
          <Text style={textStyle1}> {""} </Text>
          <Text style={textStyle2}> {"Log in"} </Text>
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
          <Text style={textStyle3}> {"Password"} </Text>
          <TextInput
            style={{
              ...textInputStyle,
              borderColor: passwordError === "no error" ? "gray" : "red",
            }}
            secureTextEntry={true}
            onChangeText={(text) => onChangePassword(text)}
            value={password}
          />
          <Text style={textStyleError}>
            {passwordError === "no error" ? "" : `* ${passwordError}`}
          </Text>
          <TouchableOpacity
            style={buttonStyle}
            onPress={async () => {
              setLoadingVisible(true);
              const { status, type, message } = await signInUser(
                username,
                password
              );

              if (status === "successful") {
                setLoadingVisible(false);
                navigation.navigate("Tab");
                setModalVisible(false);
              }

              if (status === "not confirmed") {
                await resendVerificationCode(username);
                setLoadingVisible(false);
                setVerificationVisible(true);
              }

              if (status === "error") {
                setLoadingVisible(false);
                switch (type) {
                  case "username":
                    setUsernameError(message);
                    break;
                  case "password":
                    setPasswordError(message);
                    break;
                  case "general":
                    setUsernameError(message);
                    break;
                }
              }
            }}
          >
            <Text style={textStyle4}>{"Log in"}</Text>
          </TouchableOpacity>

          <View style={forgotPasswordStyle}>
            <TouchableOpacity
              style={{ alignSelf: "center", justifyContent: "center" }}
              onPress={() => {
                setRecoveryVisible(true);
                setPasswordError(false);
                setUsernameError(false);
              }}
            >
              <Text style={textStyle5}>{"Forgot your password?"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    forgotPasswordStyle: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      width: 250,
    },
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
      marginBottom: 10,
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
    textStyle5: {
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
