import React, { useEffect, useRef } from "react";
import backgroundVideo from "../../../../assets/videos/straight-line-mission-vid.mp4";
import { Video } from "expo-av";
import { StyleSheet } from "react-native";
import { getTheme } from "../../theme/themes";
import { SCREEN_HEIGHT } from "../../../domain/resources/operating_system/dimensions";

export default function BackgroundVideo() {
  const { backgroundVideoStyle } = styles();

  const video = useRef(null);

  useEffect(() => {
    video.current.playAsync();
  }, []);

  return (
    <Video
      ref={video}
      style={backgroundVideoStyle}
      source={backgroundVideo}
      useNativeControls={false}
      resizeMode="cover"
      isLooping
      isMuted={true}
      isLooping={true}
    />
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    backgroundVideoStyle: {
      height: SCREEN_HEIGHT,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
    },
  });
};
