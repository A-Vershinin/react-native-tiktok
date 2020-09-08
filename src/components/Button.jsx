// Core
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

// Utils
import { THEME } from "../theme";

export const Button = ({
  isActive = false,
  icon,
  children,
  onPress = () => {}
}) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.3} onPress={onPress}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 32,
    width: 32,
    resizeMode: "contain"
  },
  text: {
    fontSize: 12,
    marginTop: -2,
    color: THEME.COLOR_2
  },
  textActive: {
    color: THEME.COLOR_3
  }
});
