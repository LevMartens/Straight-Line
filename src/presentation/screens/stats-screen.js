import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { getLineDraftsFor } from "../../domain/resources/backend/get-line-drafts";
import { getTheme } from "../theme/themes";
import { owner } from "./profile-screen";

export default function Stats({ navigation }) {
  const themedStyles = styles();

  useEffect(() => {
    console.log("TEST: owner in stats " + owner);
    getLineDraftsFor(owner);
  }, []);

  return <View style={themedStyles.container}></View>;
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
