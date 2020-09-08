// Core
import React from "react";
import { View, StyleSheet } from "react-native";

// Utils
import { THEME } from "../theme";

export const Main = ({ children }) => (
  <View style={styles.main}>{children}</View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: THEME.COLOR_3
  }
});
