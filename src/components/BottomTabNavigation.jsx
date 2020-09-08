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

// Components
import { Button } from "./Button";
import { ButtonPlus } from "./ButtonPlus";

// Utils
import { THEME } from "../theme";

const ICONS = {
  HOME: require("../../assets/icons/home.png"),
  DISCOVER: require("../../assets/icons/discover.png"),
  MESSAGE: require("../../assets/icons/message.png"),
  PROFILE: require("../../assets/icons/profile.png")
};

export const BottomTabNavigation = () => {
  return (
    <View style={styles.container}>
      <Button icon={ICONS.HOME}>Main</Button>
      <Button icon={ICONS.DISCOVER}>Discover</Button>

      <ButtonPlus />

      <Button icon={ICONS.MESSAGE}>Messages</Button>
      <Button icon={ICONS.PROFILE}>Profile</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: THEME.COLOR_1,
    backgroundColor: "transparent"
  }
});
