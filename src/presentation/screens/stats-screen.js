import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
//import { getLineDraftsFor } from "../../domain/resources/aws/dynamo_db/get-line-drafts";
import { getTheme } from "../theme/themes";
//import { owner } from "./profile-screen";
import Amplify, { Auth, Hub } from "aws-amplify";
import { getLineDraftsFor } from "../../domain/use_cases/get-line-drafts-for-owner";
import { useSelector } from "react-redux";

export default function Stats({ navigation }) {
  const themedStyles = styles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasLineDraftData, setHasLineDraftData] = useState(false);

  const {
    userData: { username },
  } = useSelector((state) => state.userDataHandler);

  useEffect(() => {
    getLineDraftsFor(username).then(({ successful, items }) => {
      if (successful) {
        setHasLineDraftData(true);
        setData(items);
      }

      setLoading(false);
    });
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
