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
import { getTheme } from "../../theme/themes";
import MenuSvgComponent from "../svg-components/menu-svg";
import {
  menuVisibleUpdate,
  searchOnChangeUpdate,
  searchVisibleUpdate,
  showHeadingOnUpdate,
  timeDelayUpdate,
} from "../../state-management/actions/actions";
import store from "../../state-management/store/store";
import { getSearchResults } from "../../../domain/use_cases/get-search-results";
import { watchHeading } from "../../../domain/resources/environment/watch-heading";

export default function MenuHeaderRightButton({ navigation }) {
  const { colorUnFocused } = getTheme();
  const { buttonStyle, textStyle1 } = styles();
  const searchVisible = useSelector((state) => state.searchVisibleHandler);
  const menuVisible = useSelector((state) => state.menuVisibleHandler);
  const showHeadingOn = useSelector((state) => state.showHeadingOnHandler);
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const headingWatcher = useSelector((state) => state.headingWatcherHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );
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
              store.dispatch(timeDelayUpdate(false));

              Keyboard.dismiss();
            }}
          >
            <Text style={textStyle1}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <TouchableOpacity
          style={{ ...buttonStyle }}
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
            }
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
    textStyle1: {
      //marginTop: 3,
      //marginLeft: 20,
      fontSize: 13,
      color: "gray", //theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontThin,
    },
    buttonStyle: {
      paddingRight: 22,
      paddingTop: 16,
      // marginRight: 20,
      // height: 50,
      // position: "absolute",
    },
  });
};
