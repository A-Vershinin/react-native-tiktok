// Core
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Video } from "expo-av";

export const VideoPlayer = props => {
  const { isPause, isPlay, poster, movie } = props;

  return (
    <Video
      style={styles.video}
      rate={1.0}
      volume={1.0}
      isLoaded={false}
      isMuted={true}
      isLooping={true}
      shouldPlay={!isPause && isPlay}
      useNativeControls={false}
      usePoster
      posterSource={poster}
      source={movie}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 0,
    height: "100%"
  }
});
