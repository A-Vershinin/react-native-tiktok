// Core
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

// Utils
import { THEME } from "../theme";

export const Info = ({ user }) => {
  const { username, description, music } = user;

  return (
    <View style={styles.default}>
      <View style={styles.user}>
        <Text style={styles.textUserName}>@{user.username}</Text>
      </View>
      <Text style={styles.textDesc}>#{user.description}</Text>
      <Text style={styles.textMusic}>
        <Feather name="music" size={13} /> {user.music}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 70,
    marginLeft: 13,
    backgroundColor: "transparent"
  },
  user: {
    flexDirection: "row",
    alignItems: "center"
  },
  textUserName: {
    fontSize: 17,
    fontWeight: "700",
    color: THEME.COLOR_3,
    letterSpacing: -0.3,
    textShadowColor: THEME.COLOR_9,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  textDesc: {
    width: "80%",
    marginTop: 6,
    fontSize: 17,
    color: THEME.COLOR_3,
    letterSpacing: -0.2
  },
  textMusic: {
    width: "80%",
    marginTop: 13,
    fontSize: 15,
    color: THEME.COLOR_3
  }
});
