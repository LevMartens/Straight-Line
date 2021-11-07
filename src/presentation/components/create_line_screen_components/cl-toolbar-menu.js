import React, { useState } from "react";
import store from "../../state_management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../../theme/themes";
import { watchHeading } from "../../../domain/resources/operating_system/watch-heading";
import CompassSvgComponent from "../svg_components/compass";
import LayersSvgComponent from "../svg_components/layers-svg";
import { Alert } from "react-native";
import CurrentLocationSvgComponent from "../svg_components/current-location-svg";
import {
  loadingVisibleUpdate,
  mapTypeUpdate,
  resetPin,
  setPinStartingPoint,
  showHeadingOnUpdate,
} from "../../state_management/actions/actions";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";
import UndoSvgComponent from "../svg_components/undo-svg";
import HideMarkerSvgComponent from "../svg_components/hide-marker-svg";
import MarkerButtonSvgComponent from "../svg_components/marker-button-svg";
import { showAddLineTitleAlert } from "../../../domain/resources/operating_system/alerts";
import { createLineDraft } from "../../../domain/use_cases/create-line-draft";
import { useNavigation } from "@react-navigation/native";

export default function CreateLineToolbar() {
  const navigation = useNavigation();
  const { buttonColor } = getTheme();
  const {
    compassStyle,
    doneStyle,
    layersStyle,
    containerStyle,
    textStyle,
    layersStyle1,
  } = styles();

  const pinState = useSelector((state) => state.createLineStateHandler);
  const showHeadingOn = useSelector((state) => state.showHeadingOnHandler);
  const liveDirection = useSelector((state) => state.watchDirection);
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const headingWatcher = useSelector((state) => state.headingWatcherHandler);
  const mapType = useSelector((state) => state.mapTypeHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );

  const [threeDOn, setThreeDOn] = useState(false);
  const [doneButtonText, setDoneButtonText] = useState("Add name");
  const title = useSelector((state) => state.lineTitleHandler);

  const firstPinCoordinates = useSelector((state) => state.startMarkerHandler);

  const secondPinCoordinates = useSelector((state) => state.endMarkerHandler);

  const cameraPositionNormal = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  const cameraPosition3D = {
    center: aSingleCurrentPosition,
    pitch: 50,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  return (
    <View style={containerStyle}>
      {/* <View style={{ flexDirection: "row" }}> */}
      {/* <TouchableOpacity
        onPress={() => {}}
        style={{ ...compassStyle, marginLeft: 0 }} //203 //7
      >
        <UndoSvgComponent></UndoSvgComponent>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          store.dispatch(resetPin());
        }}
        style={{ ...compassStyle, marginLeft: 0 }}
      >
        <MarkerButtonSvgComponent
          svgColor={pinState === "Set starting point" ? buttonColor : "white"}
        ></MarkerButtonSvgComponent>
        <Text
          style={{
            ...textStyle,
            marginTop: 1,
            color: pinState === "Set starting point" ? buttonColor : "white",
          }}
        >
          Starting point
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          store.dispatch(setPinStartingPoint());
        }}
        style={{ ...compassStyle, marginLeft: 0 }}
      >
        <MarkerButtonSvgComponent
          svgColor={pinState === "Set end point" ? buttonColor : "white"}
        ></MarkerButtonSvgComponent>
        <Text
          style={{
            ...textStyle,
            marginTop: 1,
            color: pinState === "Set end point" ? buttonColor : "white",
          }}
        >
          {"End   point"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          if (doneButtonText === "Add name") {
            showAddLineTitleAlert(); //!bypasses usecases
            setDoneButtonText("Done");
          }

          if (doneButtonText === "Done") {
            store.dispatch(loadingVisibleUpdate(true));

            await createLineDraft(
              firstPinCoordinates,
              secondPinCoordinates,
              title
            );

            store.dispatch(loadingVisibleUpdate(false));
            navigation.navigate("Detail");
            setDoneButtonText("Add name");
          }
        }}
        style={{ ...doneStyle, marginLeft: 0 }}
      >
        {/* <MarkerButtonSvgComponent></MarkerButtonSvgComponent> */}
        <Text style={{ ...textStyle, marginTop: 1, color: "white" }}>
          {doneButtonText}
        </Text>
      </TouchableOpacity>
      {/* </View> */}

      {/* <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={async () => {}}
          style={{ ...layersStyle, marginLeft: 68 }}
        >
          <HideMarkerSvgComponent></HideMarkerSvgComponent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {}}
          style={{ ...layersStyle, marginLeft: 7 }}
        >
          <HideMarkerSvgComponent></HideMarkerSvgComponent>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{ ...layersStyle1, marginLeft: 68 }}
        >
          <Text style={textStyle}>156.4</Text>
          <Text style={textStyle}>km</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{ ...layersStyle1, marginLeft: 7 }}
        >
          <Text style={textStyle}>156.4</Text>
          <Text style={textStyle}>km</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    layersStyle: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      //borderRadius: 35,
      height: 60,
      width: 60,
      paddingLeft: 14.5,
      paddingTop: 15,
    },
    layersStyle1: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      //borderRadius: 35,
      height: 60,
      width: 60,
      //paddingLeft: 15,
      paddingTop: 10,
    },
    compassStyle: {
      marginTop: 5,
      backgroundColor: theme.primaryColor,
      //borderRadius: 35,
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    doneStyle: {
      marginTop: 5,
      backgroundColor: theme.buttonColor,
      //borderRadius: 35,
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
