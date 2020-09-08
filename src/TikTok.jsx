// Core
import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";

// Screens
import { Home } from "./screens";

// Utils
import { api } from "./api";

const loadAssetsAsync = () => {
  console.log("#--load assets--#");
};

export const TikTok = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [data, setData] = useState({
    movies: [],
    items: []
  });
  const [currentTab, setCurrentTab] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const getMovies = api.movies.fetch();
      const getItems = api.items.fetch();

      setData(prev => {
        return {
          ...prev,
          movies: getMovies,
          items: getItems
        };
      });
    };
    if (!isAppReady) {
      fetchData();
    }
  }, [setData, isAppReady]);

  if (!isAppReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsAppReady(true)}
        onError={err => console.warn("AppLoading error", err)}
      />
    );
  }

  const videos = !!currentTab ? data.movies : data.items;
  const isActive = currentTab === 0;

  return (
    <Home
      isActive={isActive}
      currentTab={currentTab}
      selected={selected}
      videos={videos}
      onSelect={setSelected}
      onChangeTab={setCurrentTab}
    />
  );
};
