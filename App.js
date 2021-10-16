import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./src/presentation/state_management/store/store";
import { Storage, API } from "aws-amplify";
import { Button, Platform, Text, View } from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import Amplify, { Auth, Hub } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/presentation/routes/root-stack";
import { ActivityIndicator } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import awsconfig from "./aws-exports";
import { RootSiblingParent } from "react-native-root-siblings";
import "react-native-gesture-handler";
import * as Network from "expo-network";
import * as AuthSession from "expo-auth-session";
import { createLineDraft } from "./src/domain/use_cases/create-line-draft";
import { createPublicLine } from "./src/domain/use_cases/create-public-line";

async function urlOpener(url, redirectUrl) {
  const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
    url,
    redirectUrl
  );

  if (type === "success" && Platform.OS === "ios") {
    WebBrowser.dismissBrowser();
    return Linking.openURL(newUrl);
  }
}

const url = AuthSession.makeRedirectUri();
console.log("TEST: redirectUrl " + url + "/");

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-Black": require("./assets/fonts/Urbanist-Black.ttf"),
  });
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signUp":
          console.log("LOG: User signed up");

          break;
        case "signIn":
          console.log("LOG: User signed in");
          getUser().then((userData) => {
            console.log("TEST: user: ", userData);
            setUser(userData);
            setUserLoggedIn(true);
          });
          break;
        case "signOut":
          setUser(null);
          setUserLoggedIn(false);
          break;
        case "signIn_failure":
          console.log("LOG: Sign in failure");
        case "cognitoHostedUI_failure":
          console.log("LOG: Sign in failure", data);
          break;
      }
    });

    getUser().then((userData) => {
      //owner = userData.username;
      setUser(userData);
      if (userData != "undefined") {
        setUserLoggedIn(true);
      }
      // console.log(
      //   "TEST: userlogged in " +
      //     userLoggedIn +
      //     " userdata " +
      //     JSON.stringify(userData)
      // );
    });
    //saveProduct();
    //createTestLine();
  }, []);

  async function createTestLine() {
    const lineDraft = await createLineDraft(
      { latitude: -37.717976, longitude: 144.925495 },
      { latitude: -37.706905, longitude: 144.975437 },
      "Panda"
    );
    const publicLine = await createPublicLine(
      lineDraft,
      [],
      "00:05:56",
      "5B",
      14,
      97.54,
      "Gold"
    );
  }

  async function getUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      return userData;
    } catch (e) {
      setUserLoggedIn(false);
      return console.log("LOG: user not signed in");
    }
  }

  if (!fontsLoaded) {
    return (
      <View style={{ justifyContent: "center" }}>
        <ActivityIndicator animating={true} color={"#c84b31"} size={"large"} />
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <RootSiblingParent>
          <PaperProvider>
            <NavigationContainer>
              <RootStack userLoggedIn={userLoggedIn}> </RootStack>
            </NavigationContainer>
          </PaperProvider>
        </RootSiblingParent>
      </Provider>
    );
  }
}
// async function confirmSignUp() {
//   try {
//     await Auth.confirmSignUp("Kalli-Morton", "796693");
//   } catch (error) {
//     console.log("error confirming sign up", error);
//   }
// }

// async function signUp() {
//   try {
//     const { user } = await Auth.signUp({
//       username: "Kalli-Morton",
//       password: "kallimorton123",
//       attributes: {
//         email: "kallimorton@hotmail.com", // optional
//       },
//     });
//     console.log(user);
//   } catch (error) {
//     console.log("error signing up:", error);
//   }
// }
