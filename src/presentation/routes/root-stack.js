import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GPSLiveScreen from "../screens/gps-live-screen";
import { BottomTab } from "./bottom-tab-bar";
import LineReviewScreen from "../screens/line-review-screen";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="GPSLive" component={GPSLiveScreen} />
      <Stack.Screen name="LINE_REVIEW" component={LineReviewScreen} />
    </Stack.Navigator>
  );
}
