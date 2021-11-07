import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/detail-screen";
import CreateLineScreen from "../screens/create-line-screen";
import { getTheme } from "../theme/themes";
import MenuHeaderRightButton from "../components/_re-useables/buttons/menu-header-right-button";
import BackHeaderButton from "../components/_re-useables/buttons/back-button";
import SearchHeaderButton from "../components/_re-useables/buttons/search-header-button";
import UndoSvgComponent from "../components/_re-useables/svg_components/toolbar-svg";
import ToolbarHeaderButton from "../components/_re-useables/buttons/toolbar-header-button";

const Stack = createStackNavigator();

export function CreateLineStack() {
  const { detailHeaderStyle, headerStyle } = styles();
  return (
    <Stack.Navigator initialRouteName="CREATE_LINE_SCREEN">
      <Stack.Screen
        name="CreateLineScreen"
        component={CreateLineScreen}
        options={({ navigation }) => ({
          title: "",
          headerRight: () => (
            <MenuHeaderRightButton
              navigation={navigation}
            ></MenuHeaderRightButton>
          ),
          headerLeft: () => (
            <ToolbarHeaderButton></ToolbarHeaderButton>
            //  <SearchHeaderButton forCreateLineScreen={true}></SearchHeaderButton>
          ),
          headerStyle: headerStyle,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          // headerRight: () => (
          //   // <NameButton></NameButton>
          //   // <MenuHeaderRightButton
          //   //   navigation={navigation}
          //   // ></MenuHeaderRightButton>
          // ),
          headerLeft: () => (
            <BackHeaderButton
              navigation={navigation}
              to={"CreateLineScreen"}
            ></BackHeaderButton>
          ),
          headerStyle: detailHeaderStyle,
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
    detailHeaderStyle: {
      backgroundColor: theme.primaryColor,
      elevation: 0,
      shadowOpacity: 0,
    },
  });
};
