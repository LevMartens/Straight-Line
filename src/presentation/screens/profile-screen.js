import React, { useEffect, useState } from "react";
import {
  Button,
  Linking,
  Platform,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { getTheme } from "../theme/themes";
import Amplify, { Auth, Hub } from "aws-amplify";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import FacebookSvgComponent from "../components/svg-components/facebook-svg";
import GoogleSvgComponent from "../components/svg-components/google-svg";

export let owner = "";

export default function Profile({ navigation }) {
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
  } = styles();

  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          getUser().then((userData) => {
            console.log("TEST: user: ", userData);
            setUser(userData);
          });
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    getUser().then((userData) => {
      console.log("TEST: userdata " + JSON.stringify(userData));
      owner = userData.username;
      setUser(userData);
    });
  }, []);

  async function getUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      return userData;
    } catch (e) {
      return console.log("Not signed in");
    }
  }

  return (
    <View style={container}>
      <Text style={{ textAlign: "center", marginBottom: 50 }}>
        User: {user ? JSON.stringify(user) : "None"}
      </Text>
      {user ? (
        <Button title="Sign Out" onPress={() => Auth.signOut()} />
      ) : (
        <View>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => Auth.federatedSignIn({ provider: "Facebook" })}
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
            onPress={() => Auth.federatedSignIn({ provider: "Google" })}
          >
            <GoogleSvgComponent
              position={"absolute"}
              left={10}
              marginTop={8}
            ></GoogleSvgComponent>
            <Text style={textStyle1}>{"Continue with Google"}</Text>
          </TouchableOpacity>
          <Text style={textStyle4}>or</Text>
          <TouchableOpacity style={buttonStyle2} onPress={() => {}}>
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
            <TouchableOpacity style={buttonStyle4} onPress={() => {}}>
              <Text style={textStyle2}>{"Log in"}</Text>
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
      marginTop: 20,
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
