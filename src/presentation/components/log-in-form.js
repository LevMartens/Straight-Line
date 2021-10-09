import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import { signInUser } from "../../domain/use_cases/user-login";
import { resendVerificationCode } from "../../domain/use_cases/user-resend-verification";
import { getTheme } from "../theme/themes";
import PasswordRecoveryForm from "./password-recovery-form";
import LogoSvgComponent from "./svg-components/logo-white-svg";
import VerificationForm from "./verification-form";

export default function LoginForm({
  setCreateAccountVisible,
  setModalVisible,
  setLoginVisible,
  navigation,
}) {
  const {
    container1,
    textStyle2,
    textStyle1,
    textStyle3,
    textStyle4,
    textStyle5,
    textStyle6,
    buttonStyle,
    textStyleTerms1,
    textStyleTerms2,
    textStyleTerms3,
    textStyleTerms4,
    textStyleError,
    textInputStyle,
  } = styles();
  const [value, onChangeText] = React.useState();
  const [recoveryVisible, setRecoveryVisible] = React.useState(false);
  const [usernameError, setUsernameError] = useState("no error");
  const [passwordError, setPasswordError] = useState("no error");
  const [username, onChangeUsername] = useState();
  const [password, onChangePassword] = useState();
  const [verificationVisible, setVerificationVisible] = useState(false);
  return (
    <View style={container1}>
      {recoveryVisible ? (
        <PasswordRecoveryForm
          setModalVisible={setModalVisible}
          setCreateAccountVisible={setCreateAccountVisible}
        ></PasswordRecoveryForm>
      ) : verificationVisible ? (
        <VerificationForm
          username={username}
          setModalVisible={setModalVisible}
          setCreateAccountVisible={setCreateAccountVisible}
          navigation={navigation}
        ></VerificationForm>
      ) : (
        <View>
          <LogoSvgComponent
            //style={{ position: "absolute", left: SCREEN_WIDTH - 260, top: 40 }}
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
              const { status, type, message } = await signInUser(
                username,
                password
              );

              if (status === "successful") {
                navigation.navigate("Tab");
                setModalVisible(false);
              }

              if (status === "not confirmed") {
                await resendVerificationCode(username);
                setVerificationVisible(true);
              }

              if (status === "error") {
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

          <View
            style={{
              marginTop: 20,
              //backgroundColor: "red",
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              width: 250,
            }}
          >
            {/* <Text style={textStyle6}>Already have an account?</Text> */}
            <TouchableOpacity
              style={{ alignSelf: "center", justifyContent: "center" }}
              onPress={() => {
                setRecoveryVisible(true);
              }}
            >
              <Text style={textStyle5}>{"Forgot your password?"}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 220,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={textStyleTerms1}>
              By continuing to use Straigth Line Mission, you agree to our{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ justifyContent: "center", alignSelf: "center" }}
                onPress={() => {
                  setModalVisible(true);
                  setTermsVisible(true);
                }}
              >
                <Text style={textStyleTerms2}>{"Terms of Service"}</Text>
              </TouchableOpacity>
              <Text style={textStyleTerms3}> and </Text>
              <TouchableOpacity
                style={{ justifyContent: "center", alignSelf: "center" }}
                onPress={() => {
                  setModalVisible(true);
                  setPrivacyVisible(true);
                }}
              >
                <Text style={textStyleTerms4}>{"Privacy Policy."}</Text>
              </TouchableOpacity>
            </View>
          </View>
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
      //marginheight: 40,
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
    textStyleTerms1: {
      //textDecorationLine: 'underline',
      //marginTop: 20,
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyleTerms2: {
      textDecorationLine: "underline",
      //marginTop: 20,
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyleTerms3: {
      //textDecorationLine: 'underline',
      //marginTop: 20,
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyleTerms4: {
      marginLeft: 3,
      textDecorationLine: "underline",
      //marginTop: 20,
      fontSize: 13,
      color: theme.textColorTerms,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    container1: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      //justifyContent: "center",
      //alignItems: "center",
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
      //marginTop: 120,
      marginLeft: 15,
      marginBottom: 10,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle3: {
      marginTop: 10, //30,
      marginLeft: 25,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    buttonStyle: {
      //flex: 1,
      marginTop: 30,
      marginLeft: 30,
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      //alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 65,
      height: 50,
      borderRadius: 16,
    },
    textStyle4: {
      //marginLeft: 5,
      fontSize: 18,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle5: {
      //textDecorationLine: "underline",
      //marginLeft: 3,
      //marginHorizontal: 20,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle6: {
      //textDecorationLine: 'underline',
      //marginTop: 20,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
