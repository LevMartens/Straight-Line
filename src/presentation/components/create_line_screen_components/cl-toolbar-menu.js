import React, { useState } from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import {
  loadingVisibleUpdate,
  readyToSetMarkerEndPoint,
  readyToSetMarkerStartingPoint,
  resetMarkers,
} from "../../state_management/actions/actions";
import MarkerButtonSvgComponent from "../_re-useables/svg_components/marker-button-svg";
import { showAddLineTitleAlert } from "../../../resources/operating_system/alerts";
import { createLineDraft } from "../../../domain/use_cases/create-line-draft";
import { useNavigation } from "@react-navigation/native";

export default function CreateLineToolbar() {
  const navigation = useNavigation();
  const { buttonColor } = getTheme();
  const { compassStyle, doneStyle, containerStyle, textStyle } = styles();

  // const title = useSelector((state) => state.lineTitleHandler);
  const { lineTitle } = useSelector((state) => state.lineDataHandler);

  const { onSelected, coordinatesStartingPoint, coordinatesEndPoint } =
    useSelector((state) => state.markerPlacementHandler);

  const [doneButtonText, setDoneButtonText] = useState("Add name");

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => {
          store.dispatch(readyToSetMarkerStartingPoint());
        }}
        style={{ ...compassStyle, marginLeft: 0 }}
      >
        <MarkerButtonSvgComponent
          svgColor={
            onSelected === "READY_TO_SET_MARKER_STARTING_POINT"
              ? buttonColor
              : "white"
          }
        ></MarkerButtonSvgComponent>
        <Text
          style={{
            ...textStyle,
            marginTop: 1,
            color:
              onSelected === "READY_TO_SET_MARKER_STARTING_POINT"
                ? buttonColor
                : "white",
          }}
        >
          Starting point
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          store.dispatch(readyToSetMarkerEndPoint());
        }}
        style={{ ...compassStyle, marginLeft: 0 }}
      >
        <MarkerButtonSvgComponent
          svgColor={
            onSelected === "READY_TO_SET_MARKER_END_POINT"
              ? buttonColor
              : "white"
          }
        ></MarkerButtonSvgComponent>
        <Text
          style={{
            ...textStyle,
            marginTop: 1,
            color:
              onSelected === "READY_TO_SET_MARKER_END_POINT"
                ? buttonColor
                : "white",
          }}
        >
          {"End   point"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          if (doneButtonText === "Add name") {
            showAddLineTitleAlert(); //!ses usecases
            setDoneButtonText("Done");
          }

          if (doneButtonText === "Done") {
            store.dispatch(loadingVisibleUpdate(true));

            await createLineDraft(
              coordinatesStartingPoint,
              coordinatesEndPoint,
              lineTitle
            );
            store.dispatch(resetMarkers()); //! new

            store.dispatch(loadingVisibleUpdate(false));
            navigation.navigate("Detail");
            setDoneButtonText("Add name");
          }
        }}
        style={{ ...doneStyle, marginLeft: 0 }}
      >
        <Text style={{ ...textStyle, marginTop: 1, color: "white" }}>
          {doneButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    layersStyle: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      height: 60,
      width: 60,
      paddingLeft: 14.5,
      paddingTop: 15,
    },
    layersStyle1: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      height: 60,
      width: 60,
      paddingTop: 10,
    },
    compassStyle: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    doneStyle: {
      marginTop: 5,
      backgroundColor: theme.buttonColor,
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    containerStyle: {
      zIndex: 999999999999999,
      position: "absolute",
      top: 0,
      left: 0,
      height: 200,
      width: 70,
      alignItems: "center",
    },
    textStyle: {
      marginTop: 3,
      fontSize: 13,
      color: "gray",
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
  });
};
