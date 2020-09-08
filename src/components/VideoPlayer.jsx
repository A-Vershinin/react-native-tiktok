// Core
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Video } from "expo-av";

export const VideoPlayer = props => {
  const { isPause, isPlay, poster, movie } = props;

  return isPlay ? (
    <Video
      style={styles.video}
      rate={1.0}
      volume={1.0}
      isLoaded={false}
      isMuted={false}
      isLooping={true}
      shouldPlay={!isPause}
      useNativeControls={false}
      usePoster
      posterSource={poster}
      source={movie}
      resizeMode="cover"
    />
  ) : (
    <View style={styles.imageWrap}>
      <Image style={styles.image} source={poster} />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    height: "100%"
  },
  imageWrap: {
    flex: 1,
    backgroundColor: "transparent"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});
