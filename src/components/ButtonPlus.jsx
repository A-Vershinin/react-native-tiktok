// Core
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Utils
import { THEME } from "../theme";

export const ButtonPlus = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.block} onPress={onPress}>
      <LinearGradient
        style={styles.border}
        start={{ x: 1, y: 0 }}
        locations={[0, 0.5, 0.5, 1]}
        colors={[THEME.COLOR_4, THEME.COLOR_4, THEME.COLOR_5, THEME.COLOR_5]}
      >
        <View style={styles.icon}>
          <Feather name="plus" size={20} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  border: {
    width: 44,
    height: 28,
    borderRadius: 8,
    alignItems: "center"
  },
  icon: {
    width: 36,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLOR_3,
    borderRadius: 8
  }
});
