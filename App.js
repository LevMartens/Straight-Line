import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./src/presentation/state-management/store/store";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/presentation/routes/root-stack";
import { ActivityIndicator } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { RootSiblingParent } from "react-native-root-siblings";
import "react-native-gesture-handler";

//TODO install jest
//TODO 3.4 Use property value shorthand. eslint: & 3.5 Group your shorthand properties at the beginning of your object declaration.
//TODO create a new type draftLines and use it with @auth, add "where" to type line to query lines created by user
//TODO create test.js for create-public-line.js and get-line-markers.js
//TODO make coordinates in db the same as marker coordinates type eg lat lng to latitude longitude
//TODO test if removing postionWatcher this way works
//TODO place markers based on current position (create-line)
//getPositionOnce(); //TODO this function bypasses use_cases in map-view-explore
//TODO make up the model when there are public lines
//TODO create button to start directions (mv-gps-live)
//TODO screen doesn't follow curser (mv-gps-live)
//TODO show something that indicates recording is going on (mv-gps-live)
//getPositionOnce(); //TODO this function bypasses use_cases (mv-gps-live)
//watchHeading(); //TODO this function bypasses use_cases (mv-gps-live)
//TODO give aSingleCurrentPosition an "isLoaded" and render MapViewCreateLine conditionally (create-line-screen)
//TODO linechart comes out of view, this can give proplems with the layout of phones that are not iphone 12 or 11
//TODO change images in weather widget to svg's
//TODO swipemodel doesnt activate on the first touch (swipe)

Amplify.configure(awsconfig);

export default function App() {
  let [fontsLoaded] = useFonts({
    Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
  });

  useEffect(() => {}, []);

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
