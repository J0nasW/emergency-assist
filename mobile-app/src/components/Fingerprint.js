import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Center } from "@builderx/utils";

function Fingerprint(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Center>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to Home")}
          style={styles.button}
        ></TouchableOpacity>
      </Center>
      <Center>
        <Image
          source={require("../assets/images/print1.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    height: 99,
    position: "absolute",
    backgroundColor: "rgba(32,189,161,1)",
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    elevation: 90,
    shadowOpacity: 0.53,
    shadowRadius: 30,
    width: 125
  },
  image2: {
    width: 58,
    height: 58,
    position: "absolute"
  }
});

export default Fingerprint;
