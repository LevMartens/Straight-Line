import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, Modal } from "react-native";
import MapViewExplore from "../components/mapviews/map-view-explore";
import { useSelector } from "react-redux";
import Banner from "../components/banner";
import { getTheme } from "../theme/themes";
import SwipeModal from "../components/swipe-modal";
import AddDifficultyAlert from "../components/add-difficulty-alert";
import DifficultySvgComponent from "../components/svg-components/difficulty";
import modelphoto from "../../../assets/modelphoto.jpg";
import StarSvgComponent from "../components/svg-components/rating-star-svg";
import SizedBox from "../components/re-usables/sized-box";

export default function Explore({ navigation }) {
  const { visible, message } = useSelector((state) => state.bannerHandler);
  const {
    containerStyle,
    textStyle,
    textStyle1,
    textStyle2,
    textStyle3,
    difficultyBand,
  } = styles();
  const searchVisible = useSelector((state) => state.searchVisibleHandler);
  const {
    isLoaded,
    rawLineData: { title, difficultyLevel, distance },
  } = useSelector((state) => state.selectedMarkerHandler);

  return (
    <View style={containerStyle}>
      <SwipeModal>
        {isLoaded ? (
          <View>
            <Image
              source={require("../../../assets/modelphoto.jpg")}
              style={{
                marginTop: 15,
                width: 370,
                height: 130,
                //borderRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
              resizeMode="cover"
            />
            <Text style={textStyle}> {`${title}`} </Text>
            <Text style={textStyle1}> {"Melbounre, Victoria, Australia"} </Text>
            {/* <View
              style={{
                marginLeft: 20,
              }}
            >
              <DifficultySvgComponent></DifficultySvgComponent>
            </View> */}

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ ...textStyle2, paddingTop: 2 }}
              >{`Difficulty level:  8b`}</Text>
              <View style={difficultyBand}>
                <Text style={textStyle3}>moderate</Text>
              </View>
              <StarSvgComponent></StarSvgComponent>
              <StarSvgComponent></StarSvgComponent>
              <StarSvgComponent></StarSvgComponent>
              <StarSvgComponent></StarSvgComponent>
              <StarSvgComponent></StarSvgComponent>
              <SizedBox width={5}></SizedBox>
              <Text style={{ ...textStyle1, paddingTop: 2 }}> {"(24)"} </Text>
            </View>

            <Text style={{ ...textStyle1, marginBottom: 60 }}>
              {" "}
              {`Lenght: ${distance}m`}{" "}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={textStyle}> {"loading..."} </Text>
          </View>
        )}
      </SwipeModal>
      <MapViewExplore></MapViewExplore>
      <Banner visible={visible} bannerText={message}></Banner>
    </View>
  );
}
const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
    textStyle: {
      marginTop: 3,
      //marginLeft: 20,
      fontSize: 17,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontThick, //theme.fontFamily,
    },
    textStyle2: {
      marginTop: 3,
      marginLeft: 2,
      fontSize: 14,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle1: {
      marginTop: 3,
      //marginLeft: 20,
      fontSize: 13,
      color: "gray", //theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontThin,
    },
    difficultyBand: {
      marginLeft: 15,
      marginRight: 10,
      marginTop: 3,
      height: 18,
      width: 60,
      backgroundColor: "#fc9c04",
      alignSelf: "center",
      borderRadius: 5,
    },
    textStyle3: {
      fontSize: 12,

      paddingTop: 1,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
  });
};
