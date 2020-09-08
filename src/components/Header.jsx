// Core
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";

// Utils
import { THEME } from "../theme";

export const Header = ({ isActive = false, onChangeTab }) => {
  const onPress = value => () => onChangeTab(value);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress(0)}>
        <Text style={[styles.menu, isActive ? styles.active : ""]}>
          Subscriptions
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity activeOpacity={0.6} onPress={onPress(1)}>
        <Text style={[styles.menu, !isActive ? styles.active : ""]}>
          For you
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 44,
    zIndex: 10
  },
  menu: {
    marginHorizontal: 12,
    marginVertical: 11,
    letterSpacing: 0.8,
    color: THEME.COLOR_3,
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.8
  },
  active: {
    fontSize: 16,
    fontWeight: "700",
    opacity: 1
  },
  separator: {
    width: 2,
    height: 13,
    backgroundColor: THEME.COLOR_6,
    opacity: 0.6
  }
});
