// Core
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const icons = {
  LIKE: require("../../assets/icons/like.png"),
  COMMENT: require("../../assets/icons/comment.png"),
  SHARE: require("../../assets/icons/share.png")
};

export const Sidebar = props => {
  const { avatar, count, music } = props;
  const onPress = () => {};
  return (
    <View style={styles.menu}>
      <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
        <View style={styles.menuItem}>
          <View style={styles.user}>
            <Image style={styles.avatar} source={avatar} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
        <View style={styles.menuItem}>
          <Image style={styles.icon} source={icons.LIKE} />
          <Text style={styles.text}>{count.like}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
        <View style={styles.menuItem}>
          <Image style={styles.icon} source={icons.COMMENT} />
          <Text style={styles.text}>{count.comment}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
        <View style={styles.menuItem}>
          <Image style={styles.icon} source={icons.SHARE} />
          <Text style={styles.text}>Share</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <View style={styles.menuItem}>
          <View style={styles.soundBg}>
            <Image style={styles.sound} source={music.avatar} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: 60,
    height: "100%",
    paddingBottom: 60,
    justifyContent: "flex-end",
    backgroundColor: "orange",
    backgroundColor: "transparent"
  },
  menuItem: {
    alignItems: "center",
    marginVertical: 9
  },
  user: {
    width: 48,
    height: 48,
    marginBottom: 13
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    resizeMode: "cover"
  },
  icon: {
    width: "100%",
    height: 40,
    resizeMode: "contain"
  },
  text: {
    fontSize: 12,
    letterSpacing: -0.1,
    fontWeight: "700",
    color: "#fff"
  },
  soundBg: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: "#1f191f"
  },
  sound: {
    width: 25,
    height: 25,
    borderRadius: 25,
    resizeMode: "cover"
  }
});
