import React, { useState, useEffect, useRef } from "react";
import store from "../../state-management/store/store";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
} from "react-native";
import { SCREEN_WIDTH } from "../../../domain/resources/environment/dimensions";
import { searchVisibleUpdate } from "../../state-management/actions/actions";
import { getTheme } from "../../theme/themes";
import SearchSvgComponent from "../svg-components/search-svg";

export default function SearchHeaderButton() {
  const { colorUnFocused } = getTheme();
  const { buttonStyle, textInputStyle } = styles();

  //const [textInputVisible, setTextInputVisible] = useState(false);
  const textInputVisible = useSelector((state) => state.searchVisibleHandler);
  const [searchInput, onChangeSearchInput] = useState();

  const animated = textInputVisible
    ? useRef(new Animated.Value(0)).current
    : useRef(new Animated.Value(1)).current;

  // const animated = new Animated.Value(0);

  const animated1 = textInputVisible
    ? new Animated.Value(0)
    : new Animated.Value(150);

  useEffect(() => {
    Animated.timing(animated, {
      toValue: textInputVisible ? 1 : 0,
      duration: 500,
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
          onChangeText={(text) => onChangeSearchInput(text)}
          value={searchInput}
        />
      </Animated.View>
      {/* <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          if (textInputVisible) {
            setTextInputVisible(false);
          } else {
            setTextInputVisible(true);
          }
        }}
      >
        <SearchSvgComponent color={colorUnFocused}></SearchSvgComponent>
      </TouchableOpacity> */}
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
      borderRadius: 8,
      borderColor: theme.secondaryColor, //"gray",
      borderWidth: 1,
      fontSize: 18,
      color: theme.textColor,
      fontFamily: theme.fontFamily,
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
