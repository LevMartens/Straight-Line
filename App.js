import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./src/presentation/state-management/store/store";
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

//Amplify.configure(awsconfig);

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
let redirectUrl = Linking.createURL();
console.log("TEST: redURL " + redirectUrl);

const url = AuthSession.makeRedirectUri();
console.log("TEST: authsessions " + url);

// awsconfig.oauth.redirectSignIn = redirectUrl + "/";
// awsconfig.oauth.redirectSignOut = redirectUrl + "/";

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

async function getIP() {
  const ip = await Network.getIpAddressAsync();
  console.log("TEST: IP ADDRESS ", ip);
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
  });

  useEffect(() => {
    //confirmSignUp();
    //signUp();
    getIP();
  }, []);

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
              <RootStack> </RootStack>
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
