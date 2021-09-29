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

export default function Profile({ navigation }) {
  const { container, buttonStyle, textStyle, buttonStyle1, textStyle1 } =
    styles();

  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          getUser().then((userData) => setUser(userData));
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
      <Text>User: {user ? JSON.stringify(user.attributes) : "None"}</Text>
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
            <Text style={textStyle}>{"Sign in with Facebook"}</Text>
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
            <Text style={textStyle1}>{"Sign in with Google"}</Text>
          </TouchableOpacity>
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
      paddingTop: 12,
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
      paddingTop: 12,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#fff",
      width: SCREEN_WIDTH - 80,
      height: 50,
      borderRadius: 16,
    },
    textStyle: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      fontSize: 20,
      color: "black",
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
    },
  });
};
