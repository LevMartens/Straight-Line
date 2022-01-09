import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import { signUpUser } from "../../../domain/use_cases/user-sign-up";
import { getTheme } from "../../theme/themes";
import LoginForm from "./ws-log-in-form";
import VerificationForm from "./ws-verification-form";
import LogoSvgComponent from "../_re-useables/svg_components/logo-white-svg";
import ActivityIndicatorOnTransparentView from "../_re-useables/activity-indicator-transparent-view.js.js";
import LoginButton from "./ws-login-button";
import HeaderLogo from "../_re-useables/header-logo";

export default function CreateAccountForm({ setModalVisible, navigation }) {
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

  const [username, onChangeUsername] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [usernameError, setUsernameError] = useState("no error");
  const [emailError, setEmailError] = useState("no error");
  const [passwordError, setPasswordError] = useState("no error");
  const [loginVisible, setLoginVisible] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  function backToLogin() {
    //setVerificationVisible(false);
    setLoginVisible(true);
  }

  return (
    <View style={container}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      {loginVisible ? (
        <LoginForm
          setModalVisible={setModalVisible}
          navigation={navigation}
        ></LoginForm>
      ) : verificationVisible ? (
        <VerificationForm
          username={username}
          backToLogin={backToLogin}
          // setModalVisible={setModalVisible}
          // navigation={navigation}
        ></VerificationForm>
      ) : (
        <View>
          <LogoSvgComponent
            style={{ position: "absolute", left: SCREEN_WIDTH - 255, top: 10 }}
          ></LogoSvgComponent>
          <Text style={textStyle1}> {"Create"} </Text>
          <Text style={textStyle2}> {"Account"} </Text>
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
          <Text style={textStyle3}> {"Email"} </Text>
          <TextInput
            style={{
              ...textInputStyle,
              borderColor: emailError === "no error" ? "gray" : "red",
            }}
            onChangeText={(text) => onChangeEmail(text)}
            value={email}
          />
          <Text style={textStyleError}>
            {emailError === "no error" ? "" : `* ${emailError}`}
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
              const { status, type, message } = await signUpUser(
                username,
                email,
                password
              );

              if (status === "successful") {
                setLoadingVisible(false);
                setVerificationVisible(true);
              } else {
                setLoadingVisible(false);
                switch (type) {
                  case "username":
                    setUsernameError(message);
                    break;
                  case "email":
                    setEmailError(message);
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
            <Text style={textStyle4}>{"Create account"}</Text>
          </TouchableOpacity>
          <LoginButton
            onPress={() => {
              setLoginVisible(true);
            }}
          ></LoginButton>
        </View>
      )}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyleError: {
      marginLeft: 30,
      fontSize: 12,
      color: theme.textColorError,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textInputStyle: {
      width: SCREEN_WIDTH - 65,
      marginLeft: 30,
      marginTop: 5,
      paddingLeft: 8,
      height: 50,
      fontSize: 18,
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
