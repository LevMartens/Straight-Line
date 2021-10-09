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
import { signUpUser } from "../../domain/use_cases/user-sign-up";
import { getTheme } from "../theme/themes";
import LoginForm from "./log-in-form";
import LogoSvgComponent from "./svg-components/logo-white-svg";
import VerificationForm from "./verification-form";

export default function CreateAccountForm({
  setCreateAccountVisible,
  setModalVisible,
  //setLoginVisible,
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
    textInputStyle,
    textStyleError,
  } = styles();
  const [username, onChangeUsername] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [usernameError, setUsernameError] = useState("no error");
  const [emailError, setEmailError] = useState("no error");
  const [passwordError, setPasswordError] = useState("no error");
  const [loginVisible, setLoginVisible] = React.useState(false);
  const [verificationVisible, setVerificationVisible] = React.useState(false);
  return (
    <View style={container1}>
      {loginVisible ? (
        <LoginForm
          setModalVisible={setModalVisible}
          setCreateAccountVisible={setCreateAccountVisible}
          navigation={navigation}
        ></LoginForm>
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
              const { status, type, message } = await signUpUser(
                username,
                email,
                password
              );

              if (status === "successful") {
                setVerificationVisible(true);
                // setModalVisible(false);
                // setCreateAccountVisible(false);
              } else {
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
                    setEmailError(message);
                    setPasswordError(message);
                    break;
                }
              }
            }}
          >
            <Text style={textStyle4}>{"Create account"}</Text>
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
            <Text style={textStyle6}>Already have an account?</Text>
            <TouchableOpacity
              style={{ alignSelf: "center", justifyContent: "center" }}
              onPress={() => {
                //setModalVisible(false);
                //setCreateAccountVisible(false);
                setLoginVisible(true);
                //setModalVisible(true);
              }}
            >
              <Text style={textStyle5}>{"Log in"}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 100,
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
      //marginheight: 40,
      height: 50,
      borderRadius: 10,
      borderColor: "gray",
      borderWidth: 1,
      color: theme.textColor,
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
      marginTop: 50,
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
      textDecorationLine: "underline",
      marginLeft: 3,
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
