import React, { useEffect, useState } from "react";
import store from "../state-management/store/store";
import { useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getTheme } from "../theme/themes";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import LottieView from "lottie-react-native";
import confetti from "../../../assets/confetti.json";
import { watchHeading } from "../../domain/resources/environment/watch-heading";
import CompassSvgComponent from "./svg-components/compass";
import LayersSvgComponent from "./svg-components/layers-svg";
import CurrentLocationSvgComponent from "./svg-components/current-location-svg";
import {
  mapTypeUpdate,
  showHeadingOnUpdate,
} from "../state-management/actions/actions";
import { getPositionOnce } from "../../domain/resources/environment/get-position-once";

export default function ExploreMapMenu({ navigation }) {
  const { textStyle, lottieStyle, textStyleB, buttonStyle, containerStyle } =
    styles();

  const liveDirection = useSelector((state) => state.watchDirection);
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const headingWatcher = useSelector((state) => state.headingWatcherHandler);
  const mapType = useSelector((state) => state.mapTypeHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );
  const showHeadingOn = useSelector((state) => state.showHeadingOnHandler);
  //const [showHeadingOn, setShowHeadingOn] = useState(false);
  const [threeDOn, setThreeDOn] = useState(false);
  const melbourne = {
    latitude: -37.840935,
    longitude: 144.946457,
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShowButton(true);
  //     }, 2000);
  //   }, []);

  return (
    <View
      style={{
        zIndex: 999999999999999,
        position: "absolute",
        top: 0,
        right: 0,
        //backgroundColor: "red",

        height: 200,
        width: 70,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (showHeadingOn) {
            headingWatcher.remove();
            mapViewRef.animateCamera(
              {
                center: aSingleCurrentPosition,
                pitch: 2,
                heading: 0.0,
                altitude: 200000,
                zoom: 40,
              },
              500
            );
            store.dispatch(showHeadingOnUpdate(false));
            //setShowHeadingOn(false);
          }
          if (!showHeadingOn) {
            watchHeading(mapViewRef);
            store.dispatch(showHeadingOnUpdate(true));
            //setShowHeadingOn(true);
          }
        }}
        style={{
          marginTop: 5,
          backgroundColor: "#1f1f1f",
          borderRadius: 35,
          height: 60,
          width: 60,
          //paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            transform: [
              {
                rotate: showHeadingOn ? `${liveDirection}deg` : `0.0deg`,
              },
            ],
          }}
        >
          <CompassSvgComponent></CompassSvgComponent>
        </View>
        {/* <NearbySvgComponent></NearbySvgComponent> */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          if (mapType === "standard") {
            store.dispatch(mapTypeUpdate("hybridFlyover"));
          }
          if (mapType === "hybridFlyover" && !threeDOn) {
            mapViewRef.animateCamera(
              {
                center: aSingleCurrentPosition,
                pitch: 50,
                heading: 0.0,
                altitude: 200000,
                zoom: 40,
              },
              500
            );
            setThreeDOn(true);
            //store.dispatch(mapTypeUpdate("standard"));
          }
          if (mapType === "hybridFlyover" && threeDOn) {
            mapViewRef.animateCamera(
              {
                center: aSingleCurrentPosition,
                pitch: 2,
                heading: 0.0,
                altitude: 200000,
                zoom: 40,
              },
              500
            );
            setThreeDOn(false);
            store.dispatch(mapTypeUpdate("standard"));
          }
        }}
        style={{
          marginTop: 5,
          backgroundColor: "#1f1f1f",
          borderRadius: 35,
          height: 60,
          width: 60,
          paddingLeft: 15,
          paddingTop: 15,
        }}
      >
        <LayersSvgComponent></LayersSvgComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          mapViewRef.animateCamera(
            {
              center: melbourne,
              pitch: 2,
              heading: 0.0,
              altitude: 200000,
              zoom: 40,
            },
            500
          );
        }}
        style={{
          marginTop: 5,
          backgroundColor: "#1f1f1f",
          borderRadius: 35,
          height: 60,
          width: 60,
          paddingLeft: 15,
          paddingTop: 15,
        }}
      >
        <CurrentLocationSvgComponent></CurrentLocationSvgComponent>
      </TouchableOpacity>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      zIndex: 99999,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    buttonStyle: {
      paddingTop: 12,
      position: "relative",
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    textStyleB: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    lottieStyle: {
      zIndex: 88,
      ...StyleSheet.absoluteFillObject,
    },
    textStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 25,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
  });
};
