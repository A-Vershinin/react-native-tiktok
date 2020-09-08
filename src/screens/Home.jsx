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

import { useMovies } from "../bus";

export const Home = props => {
  const [selected, setSelect] = useState(0);
  const [currentTab, setCurrentTab] = useState(1);
  const [pause, setPause] = useState(false);
  const { isFetching, data: movies, error } = useMovies();

  const videos = !!currentTab ? movies.favories : movies.subscriptions;
  const isActive = currentTab === 0;

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
          tab={!currentTab}
          onChangeTab={e => setCurrentTab(e)}
        />
        <Hero
          pause={pause}
          selected={selected}
          movies={videos}
          onSelect={setSelect}
        />
        <BottomTabNavigation />
      </Container>
    </>
  );
};
