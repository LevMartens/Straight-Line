import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import ExploreScreen from "../screens/explore-screen";
import { getTheme } from "../theme/themes";
import MenuHeaderRightButton from "../components/_re-useables/buttons/menu-header-right-button";
import SearchHeaderButton from "../components/_re-useables/buttons/search-header-button";

const Stack = createStackNavigator();

export function ExploreStack() {
  const { headerStyle } = styles();
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <SearchHeaderButton></SearchHeaderButton>,
          headerRight: () => (
            <MenuHeaderRightButton
              navigation={navigation}
            ></MenuHeaderRightButton>
          ),
          headerStyle: headerStyle,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    headerStyle: {
      height: 110,
      backgroundColor: theme.primaryColor,
      elevation: 0,
      shadowOpacity: 0,
    },
  });
};
