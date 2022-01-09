import React, { useEffect, useRef } from "react";
import store from "../../state_management/store/store";
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
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import NearbySvgComponent from "../_re-useables/svg_components/nearby-svg";
import {
  searchVisibleUpdate,
  selectPublicLine,
  timeDelayUpdate,
} from "../../state_management/actions/actions";
import MarkerSvgComponent from "../_re-useables/svg_components/marker-svg";

export default function SearchView({ searchVisible }) {
  const {
    textStyle,
    nearbyButtonStyle,
    markerRegionStyle,
    emptySlotStyle,
    containerStyle,
  } = styles();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const recentSearches = useSelector((state) => state.recentSearchesHandler);

  const { aSingleCurrentPosition } = useSelector(
    (state) => state.locationHandler
  );
  const { noTextInput, resultsFound, noResult, data } = useSelector(
    (state) => state.searchResultsHandler
  );

  const cameraPosition = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

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
                mapViewRef.animateCamera(cameraPosition, 500);
                Keyboard.dismiss();
              }}
              style={nearbyButtonStyle}
            >
              <NearbySvgComponent></NearbySvgComponent>
              <Text style={{ ...textStyle, marginLeft: 10 }}>Nearby</Text>
            </TouchableOpacity>
            <Text style={{ ...textStyle }}>Recent searches</Text>
            {recentSearches.length > 0 &&
              recentSearches.map((result) => {
                const {
                  rawLineData: { title, place },
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
                      store.dispatch(selectPublicLine(result));
                    }}
                    style={markerRegionStyle}
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
                        {place}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}

            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
            <View style={emptySlotStyle}></View>
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
                  store.dispatch(selectPublicLine(result));
                }}
                style={markerRegionStyle}
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
                    {place}
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
    emptySlotStyle: {
      height: 80,
      width: SCREEN_WIDTH - 40,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
    },
    markerRegionStyle: {
      height: 80,
      width: SCREEN_WIDTH - 40,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      flexDirection: "row",
      alignItems: "center",
    },
    nearbyButtonStyle: {
      height: 70,
      width: SCREEN_WIDTH - 40,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      zIndex: 99999,
      backgroundColor: "rgba(31, 31, 31, 0.9)",
    },
    textStyle: {
      flexDirection: "row",
      justifyContent: "center",
      fontSize: 16,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
  });
};
