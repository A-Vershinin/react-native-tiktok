// Core
import React, { useState } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";

// Screens
import { Home } from "./screens";

// Utils
import { store } from "./init/store";

const loadAssetsAsync = () => {
  console.log("#--load assets--#");
};

export const TikTok = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  if (!isAppReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsAppReady(true)}
        onError={err => console.warn("AppLoading error", err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
