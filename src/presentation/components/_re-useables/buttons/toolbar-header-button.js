import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { toolbarVisibleUpdate } from "../../../state_management/actions/actions";
import store from "../../../state_management/store/store";
import ToolbarSvgComponent from "../../_re-useables/svg_components/toolbar-svg";

export default function ToolbarHeaderButton() {
  const { buttonStyle } = styles();

  const toolbarVisible = useSelector((state) => state.toolbarVisibleHandler);

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
  return StyleSheet.create({
    buttonStyle: {
      width: 50,
      height: 50,
      zIndex: 100,
      paddingTop: 1,
      paddingLeft: 24,
      marginLeft: 0,
      top: -10,
      position: "absolute",
    },
  });
};
