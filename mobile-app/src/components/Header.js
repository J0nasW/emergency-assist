import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialIcons from "@expo/vector-icons";

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTextRow}>
        <Text style={styles.headerText}>{title}</Text>
        <MaterialIcons name="menu" size={28} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18
  },
  headerIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 4
  },
  headerTextRow: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 16
  }
});