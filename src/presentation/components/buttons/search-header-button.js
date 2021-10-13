import React, { useState, useEffect, useRef } from "react";
import store from "../../state-management/store/store";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
  Keyboard,
} from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import {
  searchVisibleUpdate,
  timeDelayUpdate,
  searchOnChangeUpdate,
} from "../../state-management/actions/actions";
import { getTheme } from "../../theme/themes";
import SearchSvgComponent from "../svg-components/search-svg";
import EraseSvgComponent from "../svg-components/erase-svg";
import { getSearchResults } from "../../../domain/use_cases/get-search-results";
import { recentSearches } from "../search-view";

export default function SearchHeaderButton() {
  const { colorUnFocused } = getTheme();
  const { buttonStyle, textInputStyle, placeHolderStyle } = styles();

  //const [textInputVisible, setTextInputVisible] = useState(false);
  const textInputVisible = useSelector((state) => state.searchVisibleHandler);
  const timeIsPassed = useSelector((state) => state.timeDelayHandler);

  const [searchInput, onChangeSearchInput] = useState();

  function startDelay() {
    setTimeout(function () {
      store.dispatch(timeDelayUpdate(true));
    }, 350); //500
  }

  const animated = textInputVisible
    ? useRef(new Animated.Value(0.8)).current //0.8
    : useRef(new Animated.Value(1)).current;

  // const animated = new Animated.Value(0);

  const animated1 = textInputVisible
    ? new Animated.Value(0)
    : new Animated.Value(150); //150

  useEffect(() => {
    Animated.timing(animated, {
      toValue: textInputVisible ? 1 : 0.8, //0.8
      duration: 300, //500,
      useNativeDriver: true,
    }).start();
    // store.dispatch(searchVisibleUpdate(true));
    // store.dispatch(searchVisibleUpdate(false));
    Animated.timing(animated1, {
      toValue: textInputVisible ? 150 : 0,
      duration: 500,
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
            startDelay();
            //setTextInputVisible(false);
          } else {
            //store.dispatch(searchVisibleUpdate(true));
            //setTextInputVisible(true);
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

            //backgroundColor: "green"
          },
        ]}
      >
        <TextInput
          style={{ ...textInputStyle }}
          onChangeText={(text) => {
            onChangeSearchInput(text);
            getSearchResults(text);
          }}
          value={textInputVisible ? searchInput : ""}
          onFocus={() => {
            store.dispatch(searchVisibleUpdate(true));
            startDelay();
          }}
          placeholder={
            textInputVisible && timeIsPassed ? "Enter location or trail" : ""
          }
          //placeholderTextColor={"#313131"}
          selectionColor={"#fc9c04"}
        />
      </Animated.View>
      {textInputVisible && timeIsPassed && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: SCREEN_WIDTH - 100,
            top: 6,
            //backgroundColor: "red",
          }}
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
    textInputStyle: {
      width: 298,
      backgroundColor: theme.secondaryColor,
      paddingLeft: 8,
      marginLeft: 60,
      marginTop: 3,
      height: 30,
      borderRadius: 10,
      borderColor: theme.secondaryColor, //"gray",
      borderWidth: 1,
      fontSize: 15,
      color: theme.textColor,
      fontFamily: theme.fontThin,
      position: "absolute",
      right: 3,
    },
    placeHolderStyle: {
      width: 298,
      backgroundColor: theme.secondaryColor,
      paddingLeft: 8,
      marginLeft: 60,
      marginTop: 3,
      height: 30,
      borderRadius: 8,
      borderColor: theme.secondaryColor, //"gray",
      borderWidth: 1,
      fontSize: 15,
      color: theme.textColor,
      fontFamily: theme.fontThin,
      position: "absolute",
      right: 3,
    },
    buttonStyle: {
      //backgroundColor: "red",
      width: 50,
      height: 50,
      zIndex: 100,
      paddingRight: 20,
      paddingTop: 16,
      paddingLeft: 20,
      marginLeft: 0,
      //height: 50,
      top: -10,
      position: "absolute",
    },
  });
};
