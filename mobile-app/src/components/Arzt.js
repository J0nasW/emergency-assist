import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Center } from "@builderx/utils";

function Arzt(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Home")}
        style={styles.button}
      ></TouchableOpacity>
      <Text style={styles.woIstDerNachste}>Wo ist der nächste</Text>
      <Text style={styles.text}>Arzt?</Text>
      <Center vertical>
        <Image
          source={require("../assets/images/map1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(31,189,161,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    top: 0,
    left: 0,
    width: 319
  },
  woIstDerNachste: {
    top: 6,
    position: "absolute",
    fontFamily: "poppins-300",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    left: 84
  },
  text: {
    left: 84,
    position: "absolute",
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    bottom: 3
  },
  image: {
    left: 19,
    width: 45,
    height: 45,
    position: "absolute"
  }
});

export default Arzt;
