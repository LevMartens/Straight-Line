import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "../../theme/themes";
import ProfileSvgComponent from "../svg-components/profile-svg";

export default function ProfileIcon({ focused }) {
  const { colorFocused, colorUnFocused } = getTheme();
  const { textFocusedStyle, textUnFocusedStyle } = styles();

  return (
    <View style={{ alignItems: "center" }}>
      <ProfileSvgComponent color={focused ? colorFocused : colorUnFocused}>
        {" "}
      </ProfileSvgComponent>
      <Text style={focused ? textFocusedStyle : textUnFocusedStyle}>
        {"Profile"}
      </Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textFocusedStyle: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: theme.fontFamily,
      color: theme.colorFocused,
      marginTop: 2,
    },
    textUnFocusedStyle: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: theme.fontFamily,
      color: theme.colorUnFocused,
      marginTop: 2,
    },
  });
};
