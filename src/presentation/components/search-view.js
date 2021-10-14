import React, { useEffect, useState, useRef } from "react";
import store from "../state-management/store/store";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Animated,
  Keyboard,
} from "react-native";
import { getTheme } from "../theme/themes";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import LottieView from "lottie-react-native";
import loadingDots from "../../../assets/loading-dots.json";
import NearbySvgComponent from "./svg-components/nearby-svg";
import {
  searchVisibleUpdate,
  selectMarker,
  timeDelayUpdate,
} from "../state-management/actions/actions";
import MarkerSvgComponent from "./svg-components/marker-svg";
import { watchHeading } from "../../domain/resources/environment/watch-heading";

export default function SearchView({ searchVisible }) {
  const { textStyle, lottieStyle, textStyleB, buttonStyle, containerStyle } =
    styles();

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const { noTextInput, resultsFound, noResult, data } = useSelector(
    (state) => state.searchResultsHandler
  );
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const recentSearches = useSelector((state) => state.recentSearchesHandler);
  const liveDirection = useSelector((state) => state.watchDirection);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: searchVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [searchVisible]);

  return (
    <Animated.View style={{ ...containerStyle, opacity: fadeAnim }}>
      <ScrollView keyboardShouldPersistTaps="always">
        {noTextInput && (
          <View>
            <TouchableOpacity
              onPress={() => {
                store.dispatch(searchVisibleUpdate(false));
                store.dispatch(timeDelayUpdate(false));

                Keyboard.dismiss();
              }}
              style={{
                height: 70,
                width: SCREEN_WIDTH - 40,
                marginBottom: 20,
                //borderBottomWidth: 1,
                //borderBottomColor: "gray",
                flexDirection: "row",
                alignItems: "center",
                //backgroundColor: "maroon",
              }}
            >
              <NearbySvgComponent></NearbySvgComponent>
              <Text style={{ ...textStyle, marginLeft: 10 }}>Nearby</Text>
            </TouchableOpacity>
            {/* <Text style={textStyleB}>`We couldn't find anything maching \" ${}m`</Text> */}

            <Text style={{ ...textStyle }}>Recent searches</Text>
            {recentSearches.length > 0 &&
              recentSearches.map((result) => {
                const {
                  rawLineData: { title },
                  id,
                  markerRegion,
                } = result;
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => {
                      store.dispatch(searchVisibleUpdate(false));
                      store.dispatch(timeDelayUpdate(false));

                      Keyboard.dismiss();
                      mapViewRef.animateToRegion(markerRegion, 1000);
                      store.dispatch(selectMarker(result));
                    }}
                    style={{
                      height: 80,
                      width: SCREEN_WIDTH - 40,
                      borderBottomWidth: 1,
                      borderBottomColor: "gray",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MarkerSvgComponent
                      width={30}
                      height={30}
                    ></MarkerSvgComponent>
                    <View>
                      <Text style={{ ...textStyle, marginLeft: 6 }}>
                        {title}
                      </Text>
                      <Text
                        style={{
                          ...textStyle,
                          marginLeft: 6,
                          fontSize: 14,
                          color: "gray",
                        }}
                      >
                        Melbourne, Victoria, Australia
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}

            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
            <View
              style={{
                height: 80,
                width: SCREEN_WIDTH - 40,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            ></View>
          </View>
        )}

        {noResult && (
          <View
            style={{
              height: 400,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...textStyle, fontSize: 20 }}>No Results</Text>
            {/* <Text style={textStyleB}>`We couldn't find anything maching \" ${}m`</Text> */}
          </View>
        )}
        {resultsFound &&
          data.map((result) => {
            const {
              rawLineData: { title },
              id,
              markerRegion,
            } = result;
            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  store.dispatch(searchVisibleUpdate(false));
                  store.dispatch(timeDelayUpdate(false));

                  Keyboard.dismiss();
                  mapViewRef.animateToRegion(markerRegion, 1000);
                  store.dispatch(selectMarker(result));
                }}
                style={{
                  height: 80,
                  width: SCREEN_WIDTH - 40,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MarkerSvgComponent width={30} height={30}></MarkerSvgComponent>
                <View>
                  <Text style={{ ...textStyle, marginLeft: 6 }}>{title}</Text>
                  <Text
                    style={{
                      ...textStyle,
                      marginLeft: 6,
                      fontSize: 14,
                      color: "gray",
                    }}
                  >
                    Melbourne, Victoria, Australia
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </Animated.View>
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
      backgroundColor: "rgba(31, 31, 31, 0.9)",
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
      //alignSelf: "center",
      fontSize: 16,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
  });
};
