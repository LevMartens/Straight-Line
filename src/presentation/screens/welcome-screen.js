import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "../theme/themes";
import { Auth } from "aws-amplify";
import TermsOfUse from "../components/terms-of-use";
import PrivacyPolicy from "../components/privacy-policy";
import ActivityIndicatorOnTransparentView from "../components/activity-indicator-transparent-view.js";
import CreateAccountForm from "../components/welcome_screen_components/ws-create-account-form";
import LoginForm from "../components/welcome_screen_components/ws-log-in-form";
import FacebookButton from "../components/welcome_screen_components/ws-facebook-button";
import GoogleButton from "../components/welcome_screen_components/ws-google-button";
import OrDivider from "../components/welcome_screen_components/ws-or-divider";
import CreateAccountButton from "../components/welcome_screen_components/ws-create-account-button";
import LoginButton from "../components/welcome_screen_components/ws-login-button";
import SizedBox from "../components/re-usables/sized-box";
import BackgroundVideo from "../components/welcome_screen_components/ws-background-video";
import HeaderLogo from "../components/re-usables/header-logo";
import WelcomeMessage from "../components/welcome_screen_components/ws-welcome-message";
import WelcomeModal from "../components/welcome_screen_components/ws-welcome-modal";
import Disclamer from "../components/welcome_screen_components/ws-disclamer";

export default function WelcomeScreen({ navigation }) {
  const { container } = styles();

  const [modalVisible, setModalVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [createAccountVisible, setCreateAccountVisible] = useState(false);
  const [loadingVisible, setloadingVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);

  return (
    <View style={container}>
      {loadingVisible && (
        <ActivityIndicatorOnTransparentView></ActivityIndicatorOnTransparentView>
      )}
      <BackgroundVideo></BackgroundVideo>
      <HeaderLogo></HeaderLogo>
      <WelcomeMessage></WelcomeMessage>
      <SizedBox height={20}></SizedBox>
      <FacebookButton
        onPress={() => {
          setloadingVisible(true);
          Auth.federatedSignIn({ provider: "Facebook" }).then(() => {
            setloadingVisible(false);
          });
        }}
      ></FacebookButton>
      <GoogleButton
        onPress={() => {
          setloadingVisible(true);
          Auth.federatedSignIn({ provider: "Google" }).then(() => {
            setloadingVisible(false);
          });
        }}
      ></GoogleButton>
      <OrDivider></OrDivider>
      <CreateAccountButton
        onPress={() => {
          setModalVisible(true);
          setCreateAccountVisible(true);
        }}
      ></CreateAccountButton>
      <LoginButton
        onPress={() => {
          setModalVisible(true);
          setLoginVisible(true);
        }}
      ></LoginButton>

      <WelcomeModal
        visible={modalVisible}
        backButtonOnPress={() => {
          setModalVisible(false);
          setTermsVisible(false);
          setLoginVisible(false);
          setPrivacyVisible(false);
          setCreateAccountVisible(false);
        }}
      >
        {termsVisible && <TermsOfUse></TermsOfUse>}
        {privacyVisible && <PrivacyPolicy></PrivacyPolicy>}
        {createAccountVisible && (
          <CreateAccountForm
            setModalVisible={setModalVisible}
            navigation={navigation}
          ></CreateAccountForm>
        )}
        {loginVisible && (
          <LoginForm
            setModalVisible={setModalVisible}
            navigation={navigation}
          ></LoginForm>
        )}
      </WelcomeModal>

      <Disclamer
        termsOnPress={() => {
          setModalVisible(true);
          setTermsVisible(true);
        }}
        policyOnPress={() => {
          setModalVisible(true);
          setPrivacyVisible(true);
        }}
      ></Disclamer>
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
    },
  });
};
