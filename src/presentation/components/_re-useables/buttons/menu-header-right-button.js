import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
  Keyboard,
} from "react-native";
import { getTheme } from "../../../theme/themes";
import MenuSvgComponent from "../../_re-useables/svg_components/menu-svg";
import {
  menuVisibleUpdate,
  searchVisibleUpdate,
  timeDelayUpdate,
} from "../../../state_management/actions/actions";
import store from "../../../state_management/store/store";

export default function MenuHeaderRightButton() {
  const { colorUnFocused } = getTheme();
  const { buttonStyle, textStyle1, cancelStyle, containerStyle } = styles();

  const searchVisible = useSelector((state) => state.searchVisibleHandler);
  const menuVisible = useSelector((state) => state.menuVisibleHandler);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: searchVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [searchVisible]);

  return (
    <View style={containerStyle}>
      {searchVisible ? (
        <Animated.View style={{ opacity: fadeAnim }}>
          <TouchableOpacity
            style={cancelStyle}
            onPress={() => {
              store.dispatch(searchVisibleUpdate(false));
              store.dispatch(timeDelayUpdate(false));
              Keyboard.dismiss();
            }}
          >
            <Text style={textStyle1}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => {
            if (menuVisible) {
              store.dispatch(menuVisibleUpdate(false));
            }
            if (!menuVisible) {
              store.dispatch(menuVisibleUpdate(true));
            }
          }}
        >
          <MenuSvgComponent color={colorUnFocused}></MenuSvgComponent>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      marginRight: 20,
      height: 50,
      position: "absolute",
    },
    cancelStyle: {
      width: 50,
      height: 20,
      marginRight: 7,
      marginTop: 19,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle1: {
      fontSize: 13,
      color: "gray",
      textAlign: "left",
      fontFamily: theme.fontThin,
    },
    buttonStyle: {
      paddingRight: 22,
      paddingTop: 16,
    },
  });
};
