// Core
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { LinearGradient } from "expo-linear-gradient";

// Components
import { Container } from "./Container";
import { VideoPlayer } from "./VideoPlayer";
import { Info } from "./Info";
import { Sidebar } from "./Sidebar";

// Utils
import { THEME } from "../theme";

export const Hero = props => {
  const { selected, pause, movies = [], onSelect = () => {} } = props;
  const handlePageSelect = e => onSelect(e.nativeEvent.position);

  return (
    <ViewPager
      style={styles.block}
      orientation="vertical"
      initialPage={0}
      onPageSelected={handlePageSelect}
    >
      {movies.length
        ? movies.map((m, idx) => {
            return (
              <View key={m.id}>
                <VideoPlayer
                  isPause={pause}
                  isPlay={selected === idx}
                  poster={m.poster}
                  movie={m.video}
                />
                {selected === idx && (
                  <View style={styles.gradient}>
                    <View style={styles.center}>
                      <Info user={m.user} />
                      <Sidebar
                        avatar={m.user.avatar}
                        count={m.count}
                        music={m.music}
                      />
                    </View>
                  </View>
                )}
              </View>
            );
          })
        : null}
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "transparent"
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between"
  },
  center: {
    flex: 1,
    flexDirection: "row"
  },
  container: {
    flex: 1,
    backgroundColor: "transparent"
  }
});
