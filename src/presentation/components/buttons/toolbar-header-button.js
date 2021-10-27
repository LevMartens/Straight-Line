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
import MenuSvgComponent from "../svg_components/menu-svg";
import {
  toolbarVisibleUpdate,
  searchVisibleUpdate,
  showHeadingOnUpdate,
  timeDelayUpdate,
} from "../../state_management/actions/actions";
import store from "../../state_management/store/store";
import ToolbarSvgComponent from "../svg_components/toolbar-svg";
import { SCREEN_WIDTH } from "../../../domain/resources/operating_system/dimensions";

export default function ToolbarHeaderButton() {
  const { buttonStyle, textInputStyle, selection, eraseStyle } = styles();

  const toolbarVisible = useSelector((state) => state.toolbarVisibleHandler);
  const showHeadingOn = useSelector((state) => state.showHeadingOnHandler);
  const mapViewRef = useSelector((state) => state.mapViewRefHandler);
  const headingWatcher = useSelector((state) => state.headingWatcherHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          if (toolbarVisible) {
            store.dispatch(toolbarVisibleUpdate(false));
          }
          if (!toolbarVisible) {
            store.dispatch(toolbarVisibleUpdate(true));
          }
        }}
      >
        <ToolbarSvgComponent></ToolbarSvgComponent>
      </TouchableOpacity>
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
      //paddingRight: 20,
      paddingTop: 1,
      paddingLeft: 24,
      marginLeft: 0,
      top: -10,
      position: "absolute",
    },
  });
};
