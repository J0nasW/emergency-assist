import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";

function Splash(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Center horizontal>
        <Image
          source={require("../assets/images/Emergency_Assist_web.png")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
      </Center>
      <Center horizontal>
        <Text style={styles.title}>
          Hey, ich bin dein{"\n"}Emergency Assist
        </Text>
      </Center>
      <Center horizontal>
        <Text style={styles.content}>
          Dein Helfer, wenn es drauf{"\n"}an kommt.
        </Text>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image2: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 24
  },
  title: {
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(27,60,89,1)",
    textAlign: "center",
    fontSize: 28,
    lineHeight: 28,
    width: 296,
    top: 256,
    height: "14.07%"
  },
  content: {
    top: 331,
    position: "absolute",
    fontFamily: "poppins-300",
    color: "rgba(26,26,26,1)",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 18,
    width: 297,
    height: "10.3%"
  }
});

export default Splash;
