import React, { useState, useEffect, useRef } from "react";
import store from "../../../state_management/store/store";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
} from "react-native";
import { SCREEN_WIDTH } from "../../../../resources/operating_system/dimensions";
import {
  searchVisibleUpdate,
  timeDelayUpdate,
  menuVisibleUpdate,
  showHeadingOnUpdate,
} from "../../../state_management/actions/actions";
import { getTheme } from "../../../theme/themes";
import SearchSvgComponent from "../../_re-useables/svg_components/search-svg";
import EraseSvgComponent from "../../_re-useables/svg_components/erase-svg";
import { getSearchResults } from "../../../../domain/use_cases/get-search-results";

export default function SearchHeaderButton({ forCreateLineScreen }) {
  const { colorUnFocused } = getTheme();
  const { buttonStyle, textInputStyle, selection, eraseStyle } = styles();

  const textInputVisible = useSelector((state) => state.searchVisibleHandler);
  const timeIsPassed = useSelector((state) => state.timeDelayHandler);
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);

  const { headingWatcher, aSingleCurrentPosition, showHeadingOn } = useSelector(
    (state) => state.locationHandler
  );

  const [searchInput, onChangeSearchInput] = useState();

  const cameraPosition = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  function startDelay() {
    setTimeout(function () {
      store.dispatch(timeDelayUpdate(true));
    }, 350);
  }

  const animated = textInputVisible
    ? useRef(new Animated.Value(0.8)).current
    : useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: textInputVisible ? 1 : 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [textInputVisible]);

  const animatedStyle = {
    height: 30,
    transform: [
      {
        scaleX: animated.interpolate({
          inputRange: [0, 25, 50, 75, 100],
          outputRange: [0, 25, 50, 75, 100],
        }),
      },
    ],
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          if (!textInputVisible) {
            store.dispatch(searchVisibleUpdate(true));
            if (showHeadingOn) {
              headingWatcher.remove();
              mapViewRef.animateCamera(cameraPosition, 500);
              store.dispatch(showHeadingOnUpdate(false));
            }
            store.dispatch(menuVisibleUpdate(false));
            startDelay();
          }
        }}
      >
        <SearchSvgComponent color={colorUnFocused}></SearchSvgComponent>
      </TouchableOpacity>
      <Animated.View
        style={[
          animatedStyle,
          {
            width: 600,
            left: -250,
          },
        ]}
      >
        <TextInput
          style={textInputStyle}
          onChangeText={(text) => {
            onChangeSearchInput(text);
            getSearchResults(text, forCreateLineScreen);
          }}
          value={textInputVisible ? searchInput : ""}
          onFocus={() => {
            store.dispatch(searchVisibleUpdate(true));
            if (showHeadingOn) {
              headingWatcher.remove();
              mapViewRef.animateCamera(cameraPosition, 500);
              store.dispatch(showHeadingOnUpdate(false));
            }
            store.dispatch(menuVisibleUpdate(false));
            startDelay();
          }}
          placeholder={
            textInputVisible && timeIsPassed
              ? "Enter location or trail"
              : forCreateLineScreen
              ? "Enter location"
              : ""
          }
          selectionColor={selection.color}
        />
      </Animated.View>
      {textInputVisible && timeIsPassed && (
        <TouchableOpacity
          style={eraseStyle}
          onPress={() => {
            onChangeSearchInput("");
            getSearchResults("");
          }}
        >
          <EraseSvgComponent></EraseSvgComponent>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();

  return StyleSheet.create({
    eraseStyle: {
      position: "absolute",
      left: SCREEN_WIDTH - 100,
      top: 6,
      paddingTop: 4,
      paddingLeft: 10,
    },
    selection: { color: theme.buttonColor },
    textInputStyle: {
      width: 298,
      backgroundColor: theme.secondaryColor,
      paddingLeft: 8,
      marginLeft: 60,
      marginTop: 3,
      height: 30,
      borderRadius: 10,
      borderColor: theme.secondaryColor,
      borderWidth: 1,
      fontSize: 15,
      color: theme.textColor,
      fontFamily: theme.fontThin,
      position: "absolute",
      right: 3,
    },
    buttonStyle: {
      width: 50,
      height: 50,
      zIndex: 100,
      paddingRight: 20,
      paddingTop: 16,
      paddingLeft: 20,
      marginLeft: 0,
      top: -10,
      position: "absolute",
    },
  });
};
