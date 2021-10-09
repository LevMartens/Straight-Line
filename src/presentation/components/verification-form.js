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
import { resendVerificationCode } from "../../domain/use_cases/user-resend-verification";
import { signUpUser } from "../../domain/use_cases/user-sign-up";
import { verifyUser } from "../../domain/use_cases/user-verification";
import { getTheme } from "../theme/themes";
import LoginForm from "./log-in-form";
import LogoSvgComponent from "./svg-components/logo-white-svg";
import PrivacyPolicy from "./privacy-policy";
import TermsOfUse from "./terms-of-use";
import ActivityIndicatorOnTransparentView from "./activity-indicator-transparent-view.js";

export default function VerificationForm({
  username,
  setCreateAccountVisible,
  setModalVisible,
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
  const [code, onChangeCode] = useState();

  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [verificationError, setVerificationError] = useState("no error");
  const [emailError, setEmailError] = useState("no error");
  const [passwordError, setPasswordError] = useState("no error");
  const [loginVisible, setLoginVisible] = useState(false);
  const [isResent, setIsResent] = useState(false);
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
          setCreateAccountVisible={setCreateAccountVisible}
          navigation={navigation}
        ></LoginForm>
      ) : (
        <View>
          <LogoSvgComponent
            //style={{ position: "absolute", left: SCREEN_WIDTH - 260, top: 40 }}
            style={{ position: "absolute", left: SCREEN_WIDTH - 285, top: 10 }}
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
                setLoginVisible(true);
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

          <View
            style={{
              marginTop: 270,
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
    textStyleError: {
      marginLeft: 30,
      fontSize: 12,
      //color: theme.textColorError,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textInputStyle: {
      width: SCREEN_WIDTH - 65,
      marginLeft: 30,
      marginTop: 5,
      paddingLeft: 8,
      fontSize: 18,
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
      marginTop: 30, //30,
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
