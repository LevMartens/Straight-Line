import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import { getTheme } from "../../theme/themes";
import defaultImage from "../../../../assets/images/default-image.jpg";

export default function SwipeModalContent() {
  const {
    textStyle1,
    textStyle2,
    textStyle3,
    difficultyBandStyle,
    swipeModalImageStyle,
    textStyle,
  } = styles();

  const {
    rawLineData: {
      frontImage,
      title,
      difficultyLevel,
      place,
      difficultyBand,
      distance,
      finishedMissions: items,
    },
  } = useSelector((state) => state.selectedMarkerHandler);

  return (
    <View>
      <Image
        source={frontImage ? frontImage : defaultImage}
        style={swipeModalImageStyle}
        resizeMode="cover"
      />
      <Text style={textStyle}>{`${title}`}</Text>
      <Text style={textStyle1}>{`${place}`}</Text>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            ...textStyle2,
            paddingTop: 2,
          }}
        >{`Difficulty level:  ${difficultyLevel}`}</Text>
        <View style={difficultyBandStyle}>
          <Text style={textStyle3}>{`${difficultyBand}`}</Text>
        </View>
        <Text style={{ ...textStyle1, paddingTop: 3 }}>
          {`(${items.length})`}
        </Text>
      </View>

      <Text style={{ ...textStyle1, marginBottom: 60 }}>
        {`Lenght: ${distance}m`}
      </Text>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    textStyle2: {
      marginTop: 3,
      fontSize: 14,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyle3: {
      fontSize: 12,
      paddingTop: 1,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontThin,
    },
    textStyle1: {
      marginTop: 3,
      fontSize: 13,
      color: "gray",
      textAlign: "left",
      fontFamily: theme.fontThin,
    },
    difficultyBandStyle: {
      marginLeft: 10,
      marginRight: 5,
      marginTop: 3,
      height: 18,
      width: 60,
      backgroundColor: "#fc9c04",
      alignSelf: "center",
      borderRadius: 5,
    },
    swipeModalImageStyle: {
      marginTop: 15,
      width: 370,
      height: 130,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
  });
};
