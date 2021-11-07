import React from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../../theme/themes";
import LogoSvgComponent from "../../components/_re-useables/svg_components/logo-white-svg";

export default function HeaderLogo() {
  const { logoStyle } = styles();

  return (
    <View style={logoStyle}>
      <LogoSvgComponent width={120} height={120}></LogoSvgComponent>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    logoStyle: {
      position: "absolute",
      top: 10,
      zIndex: 999,
    },
  });
};
