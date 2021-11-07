import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../../theme/themes";
import BackSvgComponent from "../../components/_re-useables/svg_components/back-svg";
import Disclamer from "./ws-disclamer";
import PrivacyPolicy from "../_re-useables/privacy-policy";
import TermsOfUse from "../_re-useables/terms-of-use";

export default function WelcomeModal({ visible, backButtonOnPress, children }) {
  const { colorUnFocused } = getTheme();
  const { buttonStyle } = styles();

  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [disclamerVisible, setDisclamerVisible] = useState(true);

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          setDisclamerVisible(true);
          setPrivacyVisible(false);
          setTermsVisible(false);
          backButtonOnPress();
        }}
      >
        <BackSvgComponent color={colorUnFocused}></BackSvgComponent>
      </TouchableOpacity>

      {privacyVisible ? (
        <PrivacyPolicy></PrivacyPolicy>
      ) : termsVisible ? (
        <TermsOfUse></TermsOfUse>
      ) : (
        children
      )}
      {disclamerVisible && (
        <Disclamer
          termsOnPress={() => {
            setTermsVisible(true);
            setDisclamerVisible(false);
          }}
          policyOnPress={() => {
            setPrivacyVisible(true);
            setDisclamerVisible(false);
          }}
        ></Disclamer>
      )}
    </Modal>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      zIndex: 9999,
      marginTop: 60,
      marginLeft: 5,
      paddingTop: 6,
      flexDirection: "row",
      justifyContent: "center",
      width: 60,
      height: 50,
      borderRadius: 16,
    },
  });
};
