import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { useSelector } from "react-redux";
import { getTheme } from "../../theme/themes";
import {
  setPinStartingPoint,
  setPinEndPoint,
  resetPin,
} from "../../state-management/actions/actions";
import store from "../../state-management/store/store";
import { createLineDraft } from "../../../domain/use_cases/create-line-draft";
import { showAddLineTitleAlert } from "../../../domain/resources/environment/alerts";

export default function PinSetButton({ navigation }) {
  const { buttonStyle, textStyle } = styles();

  const pinState = useSelector((state) => state.createLineStateHandler);

  const title = useSelector((state) => state.lineTitleHandler);

  const firstPinCoordinates = useSelector((state) => state.startMarkerHandler);

  const secondPinCoordinates = useSelector((state) => state.endMarkerHandler);

  const pinButtonPressed = async () => {
    if (pinState == "Set starting point") {
      store.dispatch(setPinStartingPoint());
    }
    if (pinState == "Set end point") {
      store.dispatch(setPinEndPoint());
      showAddLineTitleAlert(); //!bypasses usecases
    }

    if (pinState == "Done!") {
      store.dispatch(resetPin());

      createLineDraft(firstPinCoordinates, secondPinCoordinates, title);
      navigation.navigate("Detail");
    }
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => {
        pinButtonPressed();
      }}
    >
      <Text style={textStyle}>{pinState}</Text>
    </TouchableOpacity>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingTop: 12,
      position: "absolute",
      top: 40,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 55,
      height: 50,
      borderRadius: 16,
    },
    textStyle: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
