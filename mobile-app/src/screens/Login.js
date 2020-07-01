import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Center } from "@builderx/utils";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor="rgba(29,75,115,1)"
      />
      <View style={styles.group3Stack}>
        <Center horizontal>
          <View style={styles.group3}>
            <View style={styles.rectStack}>
              <View style={styles.rect}>
                <Image
                  source={require("../assets/images/Emergency_Assist_web1.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <View style={styles.image2Filler}></View>
                <Text style={styles.deinhelfer}>
                  Dein Helfer, wenn es drauf{"\n"}an kommt.
                </Text>
              </View>
              <Text style={styles.emergencyassisttitel}>
                Hey, ich bin dein{"\n"}Emergency Assist
              </Text>
            </View>
          </View>
        </Center>
        <View style={styles.group4}>
          <TouchableOpacity /* Conditional navigation not supported at the moment */
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button1}
          >
            <Image
              source={require("../assets/images/print1.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.group3StackFiller}></View>
      <Text style={styles.einstellungen}>Einstellungen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(29,75,115,1)"
  },
  group3: {
    height: 534,
    position: "absolute",
    width: 360,
    top: 0
  },
  rect: {
    height: 506,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    width: 295,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    elevation: 90,
    shadowOpacity: 0.53,
    shadowRadius: 30,
    left: 0,
    top: 0
  },
  image2: {
    width: 200,
    height: 200,
    marginTop: 25,
    marginLeft: 48
  },
  image2Filler: {
    flex: 1
  },
  deinhelfer: {
    fontFamily: "poppins-300",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 20,
    width: 267,
    height: 56,
    marginBottom: 125,
    marginLeft: 15
  },
  emergencyassisttitel: {
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(29,75,115,1)",
    textAlign: "center",
    fontSize: 28,
    lineHeight: 30,
    bottom: 182,
    width: 296,
    height: 71,
    left: 0
  },
  rectStack: {
    width: 296,
    height: 506,
    marginTop: 14,
    marginLeft: 32
  },
  group4: {
    top: 442,
    height: 115,
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "center"
  },
  button1: {
    height: 99,
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
    width: 125,
    justifyContent: "center",
    alignSelf: "center"
  },
  image1: {
    width: 58,
    height: 58,
    alignSelf: "center"
  },
  group3Stack: {
    height: 557,
    marginTop: 103
  },
  group3StackFiller: {
    flex: 1
  },
  einstellungen: {
    fontFamily: "poppins-300",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 28,
    marginBottom: 22,
    alignSelf: "center"
  }
});

export default Login;
