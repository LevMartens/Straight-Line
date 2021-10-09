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
import { submitNewPassword } from "../../domain/use_cases/user-forgot-password-submit";
import { getTheme } from "../theme/themes";
import LoginForm from "./log-in-form";
import LogoSvgComponent from "./svg-components/logo-white-svg";
import PrivacyPolicy from "./privacy-policy";
import TermsOfUse from "./terms-of-use";
import ActivityIndicatorOnTransparentView from "./activity-indicator-transparent-view.js";

export default function PasswordRecoverySubmitForm({
  setCreateAccountVisible,
  setModalVisible,
  navigation,
  //setLoginVisible,
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
  const [value, onChangeText] = React.useState();
  const [loginVisible, setLoginVisible] = useState(false);

  const [usernameError, setUsernameError] = useState("no error");
  const [username, onChangeUsername] = useState();

  const [codeError, setCodeError] = useState("no error");
  const [code, onChangeCode] = useState();

  const [newPasswordError, setNewPasswordError] = useState("no error");
  const [newPassword, onChangeNewPassword] = useState();

  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  return (
    <View style={container1}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      {termsVisible ? (
        <TermsOfUse></TermsOfUse>
      ) : privacyVisible ? (
        <PrivacyPolicy></PrivacyPolicy>
      ) : loginVisible ? (
        <LoginForm
          setModalVisible={setModalVisible}
          navigation={navigation}
        ></LoginForm>
      ) : (
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
                setLoginVisible(true);
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

          <View
            style={{
              marginTop: 170,
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
                  //setModalVisible(true);
                  setTermsVisible(true);
                }}
              >
                <Text style={textStyleTerms2}>{"Terms of Service"}</Text>
              </TouchableOpacity>
              <Text style={textStyleTerms3}> and </Text>
              <TouchableOpacity
                style={{ justifyContent: "center", alignSelf: "center" }}
                onPress={() => {
                  //setModalVisible(true);
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
