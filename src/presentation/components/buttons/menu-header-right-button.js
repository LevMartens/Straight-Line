import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
} from "react-native";
import { getTheme } from "../../theme/themes";
import MenuSvgComponent from "../svg-components/menu-svg";
import { searchVisibleUpdate } from "../../state-management/actions/actions";
import store from "../../state-management/store/store";

export default function MenuHeaderRightButton({ navigation }) {
  const { colorUnFocused } = getTheme();
  const { buttonStyle, textStyle1 } = styles();
  const searchVisible = useSelector((state) => state.searchVisibleHandler);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: searchVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [searchVisible]);

  return (
    <View
      style={{
        //opacity: fadeAnim,
        marginRight: 20,
        height: 50,
        position: "absolute",
      }}
    >
      {/* <TouchableOpacity style={buttonStyle}>
        <MenuSvgComponent color={colorUnFocused}></MenuSvgComponent>
      </TouchableOpacity> */}
      {searchVisible ? (
        <Animated.View style={{ opacity: fadeAnim }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 20,
              //backgroundColor: "maroon",
              marginRight: 7,
              marginTop: 19,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              store.dispatch(searchVisibleUpdate(false));
            }}
          >
            <Text style={textStyle1}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <TouchableOpacity style={buttonStyle}>
          <MenuSvgComponent color={colorUnFocused}></MenuSvgComponent>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle1: {
      //marginTop: 3,
      //marginLeft: 20,
      fontSize: 13,
      color: "gray", //theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontThin,
    },
    buttonStyle: {
      paddingRight: 20,
      paddingTop: 16,
      // marginRight: 20,
      // height: 50,
      // position: "absolute",
    },
  });
};
