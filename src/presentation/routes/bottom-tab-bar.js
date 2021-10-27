import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getTheme } from "../theme/themes";
import Stats from "../screens/stats-screen";
import Profile from "../screens/profile-screen";
import ExploreIcon from "../components/icons/explore-tab-bar-icon";
import CreateLineIcon from "../components/icons/create-line-tab-bar-icon";
import StatsIcon from "../components/icons/stats-tab-tab-icon";
import ProfileIcon from "../components/icons/profile-tab-bar-icon";
import { ExploreStack } from "./explore-stack";
import { CreateLineStack } from "./create-line-stack";
import { useSelector } from "react-redux";
import { onScreenUpdate } from "../state_management/actions/actions";
import store from "../state_management/store/store";

const Tab = createBottomTabNavigator();

export function BottomTab() {
  const { bottomTabBarStyle } = styles();

  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        tabBarStyle: bottomTabBarStyle,
      }}
    >
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        listeners={{
          tabPress: (e) => {
            console.log("Explore Tab press", e.target);
            store.dispatch(onScreenUpdate("explore-screen"));
          },
        }}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return <ExploreIcon focused={focused}></ExploreIcon>;
          },
        }}
      />
      <Tab.Screen
        name="CreateLineStack"
        component={CreateLineStack}
        listeners={{
          tabPress: (e) => {
            console.log("Create Tab press", e.target);
            store.dispatch(onScreenUpdate("create-screen"));
          },
        }}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return <CreateLineIcon focused={focused}></CreateLineIcon>;
          },
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return <StatsIcon focused={focused}></StatsIcon>;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return <ProfileIcon focused={focused}></ProfileIcon>;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    bottomTabBarStyle: {
      paddingTop: 20,
      height: 90,
      borderTopWidth: 0,
      backgroundColor: theme.primaryColor,
    },
  });
};
