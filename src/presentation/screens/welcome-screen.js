import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Modal,
  Linking,
  Platform,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { getTheme } from "../theme/themes";
import Amplify, { Auth, Hub } from "aws-amplify";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../domain/resources/environment/dimensions";
import FacebookSvgComponent from "../components/svg-components/facebook-svg";
import GoogleSvgComponent from "../components/svg-components/google-svg";
import { Video, AVPlaybackStatus } from "expo-av";
import LogoSvgComponent from "../components/svg-components/logo-white-svg";
import LogoDarkSvgComponent from "../components/svg-components/logo-dark-svg";
import * as WebBrowser from "expo-web-browser";
import TermsOfUse from "../components/terms-of-use";
import PrivacyPolicy from "../components/privacy-policy";
import ActivityIndicatorOnTransparentView from "../components/activity-indicator-transparent-view.js";
import CreateAccountForm from "../components/create-account-form";
import BackHeaderButton from "../components/buttons/back-button";
import BackSvgComponent from "../components/svg-components/back-svg";
import LoginForm from "../components/log-in-form";

export let owner = "";

export default function WelcomeScreen({ navigation }) {
  const {
    container,
    buttonStyle,
    textStyle,
    buttonStyle1,
    textStyle1,
    buttonStyle2,
    textStyle2,
    textStyle3,
    buttonStyle4,
    textStyle4,
    backgroundVideo,
    textStyleLogo,
    textStyleMid,
    textStyleTerms1,
    textStyleTerms2,
    textStyleTerms3,
    textStyleTerms4,
    buttonStyleTerm1,
    buttonStyleTerm2,
    container1,
    textStyleTOFHeader,
    textStyleTOF,
    buttonStyleClose,
  } = styles();

  const video = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [createAccountVisible, setCreateAccountVisible] = useState(false);
  //const [privacyVisible, setPrivacyVisible] = useState(false);
  const [loadingVisible, setloadingVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);

  const [user, setUser] = useState(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    video.current.playAsync();
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signUp":
          // navigation.navigate("Tab");
          console.log("user signed up");
          break;
        case "signIn":
          navigation.navigate("Tab");
          //   getUser().then((userData) => {
          //     console.log("TEST: welcome ");

          //     //setUser(userData);
          //   });
          break;
        case "signOut":
          //setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    // getUser().then((userData) => {
    //   console.log("TEST: userdata " + JSON.stringify(userData));
    //   owner = userData.username;
    //   setUser(userData);
    // });
  }, []);

  //   async function getUser() {
  //     try {
  //       const userData = await Auth.currentAuthenticatedUser();
  //       return userData;
  //     } catch (e) {
  //       return console.log("Not signed in");
  //     }
  //   }

  return (
    <View style={container}>
      <Video
        ref={video}
        style={backgroundVideo}
        source={require("../../../assets/straight-line-mission-vid.mp4")}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        isMuted={true}
        isLooping={true}
        //onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      <View style={{ position: "absolute", top: 10, zindex: 999 }}>
        {/* <LogoDarkSvgComponent></LogoDarkSvgComponent> */}
        <LogoSvgComponent></LogoSvgComponent>
      </View>
      {/* <Text style={textStyleLogo}>{"Straight Line Mission"}</Text> */}
      <View
        style={{
          width: SCREEN_WIDTH,
          marginTop: 200,
          justifyContent: "flex-start",
        }}
      >
        <Text style={textStyleMid}>{"Your next adventure starts here"}</Text>
      </View>

      {/* <Text style={{ textAlign: "center", marginBottom: 50 }}>
        User: {user ? JSON.stringify(user) : "None"}
      </Text> */}
      {user ? (
        <Button title="Sign Out" onPress={() => Auth.signOut()} />
      ) : (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
              setloadingVisible(true);
              Auth.federatedSignIn({ provider: "Facebook" });
            }}
          >
            <FacebookSvgComponent
              position={"absolute"}
              left={10}
              marginTop={8}
            ></FacebookSvgComponent>
            <Text style={textStyle}>{"Continue with Facebook"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle1}
            onPress={() => {
              setloadingVisible(true);
              Auth.federatedSignIn({ provider: "Google" });
            }}
          >
            <GoogleSvgComponent
              position={"absolute"}
              left={10}
              marginTop={8}
            ></GoogleSvgComponent>
            <Text style={textStyle1}>{"Continue with Google"}</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ backgroundColor: "white", height: 1, width: 150 }}
            ></View>
            <Text style={textStyle4}>or</Text>
            <View
              style={{ backgroundColor: "white", height: 1, width: 150 }}
            ></View>
          </View>

          <TouchableOpacity
            style={buttonStyle2}
            onPress={() => {
              setModalVisible(true);
              setCreateAccountVisible(true);
            }}
          >
            <Text style={textStyle}>{"Create a free account"}</Text>
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
            <Text style={textStyle3}>Already have an account?</Text>
            <TouchableOpacity
              style={buttonStyle4}
              onPress={() => {
                setModalVisible(true);
                setLoginVisible(true);
              }}
            >
              <Text style={textStyle2}>{"Log in"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View
        style={{
          marginTop: 20,
          //backgroundColor: "red",
          flexDirection: "column",
          //backgroundColor: "red",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          width: SCREEN_WIDTH - 20,
          height: 80,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          style={{ backgroundColor: "black" }}
          onRequestClose={() => {}}
        >
          <TouchableOpacity
            style={buttonStyleClose}
            onPress={() => {
              setModalVisible(false);
              setTermsVisible(false);
              setLoginVisible(false);
              setPrivacyVisible(false);
              setCreateAccountVisible(false);
            }}
          >
            <BackSvgComponent color={"white"}></BackSvgComponent>
            {/* <BackHeaderButton
              navigation={navigation}
              to={"Welcome"}
            ></BackHeaderButton> */}
            {/* <Text style={textStyle}>{"Close"}</Text> */}
          </TouchableOpacity>

          {termsVisible && <TermsOfUse></TermsOfUse>}
          {privacyVisible && <PrivacyPolicy></PrivacyPolicy>}
          {createAccountVisible && (
            <CreateAccountForm
              setModalVisible={setModalVisible}
              setCreateAccountVisible={setCreateAccountVisible}
              //setLoginVisible={setLoginVisible}
              navigation={navigation}
            ></CreateAccountForm>
          )}
          {loginVisible && (
            <LoginForm
              setModalVisible={setModalVisible}
              setCreateAccountVisible={setCreateAccountVisible}
              setLoginVisible={setLoginVisible}
              navigation={navigation}
            ></LoginForm>
          )}
        </Modal>

        <Text style={textStyleTerms1}>
          By continuing to use Straigth Line Mission, you agree to our{" "}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={buttonStyleTerm1}
            onPress={() => {
              setModalVisible(true);
              setTermsVisible(true);
            }}
          >
            <Text style={textStyleTerms2}>{"Terms of Service"}</Text>
          </TouchableOpacity>
          <Text style={textStyleTerms3}> and </Text>
          <TouchableOpacity
            style={buttonStyleTerm2}
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
  );
}
const styles = () => {
  const theme = getTheme();

  return StyleSheet.create({
    textStyleTOFHeader: {
      //position: "absolute",
      //top: 280,
      //marginTop: 200,

      //marginLeft: 40,
      //width: 200,
      fontSize: 30,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    container1: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
    backgroundVideo: {
      height: SCREEN_HEIGHT,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
    },
    buttonStyle: {
      //flex: 1,
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#4267B2",
      width: SCREEN_WIDTH - 80,
      height: 50,
      borderRadius: 16,
    },
    buttonStyle1: {
      //flex: 1,
      marginTop: 20,
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#fff",
      width: SCREEN_WIDTH - 80,
      height: 50,
      borderRadius: 16,
    },
    buttonStyleClose: {
      zIndex: 9999,
      marginTop: 60,
      marginLeft: 5,
      paddingTop: 6,
      flexDirection: "row",
      justifyContent: "center",
      //alignSelf: "center",
      //backgroundColor: theme.buttonColor,
      width: 60,
      height: 50,
      borderRadius: 16,
    },
    buttonStyle2: {
      //flex: 1,
      marginTop: 20,
      paddingTop: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 80,
      height: 50,
      borderRadius: 16,
    },
    buttonStyle4: {
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
    buttonStyleTerm1: {
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
    buttonStyleTerm2: {
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
    textStyleLogo: {
      position: "absolute",
      top: 140, //110,
      //marginLeft: 5,
      fontSize: 23,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyleMid: {
      //position: "absolute",
      //top: 280,
      //marginTop: 200,

      marginLeft: 40,
      width: 200,
      fontSize: 40,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle: {
      //marginLeft: 5,
      fontSize: 18,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      fontSize: 18,
      color: "black",
      textAlign: "center",
      fontFamily: theme.fontFamily,
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
    textStyle3: {
      //textDecorationLine: 'underline',
      //marginTop: 20,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle4: {
      //textDecorationLine: 'underline',
      //marginTop: 20,
      marginHorizontal: 5,
      fontSize: 15,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
    },
  });
};
