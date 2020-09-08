// Core
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

// Components
import {
  Container,
  Main,
  Navbar,
  Header,
  Hero,
  BottomTabNavigation
} from "../components";

export const Home = props => {
  const {
    isActive,
    currentTab,
    selected,
    videos,
    onSelect,
    onPause,
    onChangeTab
  } = props;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Header
          isActive={isActive}
          tab={currentTab}
          onChangeTab={e => onChangeTab(e)}
        />
        <Hero selected={selected} movies={videos} onSelect={onSelect} />
        <BottomTabNavigation />
      </Container>
    </>
  );
};
