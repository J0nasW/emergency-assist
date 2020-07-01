import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import {colors, dimensions} from '../styles/base.js';

function Login(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor="rgba(29,75,115,1)"
      />
      
      <View style={styles.bg_group}>
        <View style={styles.rect}>
          <Image
            source={require("../assets/images/Emergency_Assist_web1.png")}
            resizeMode="contain"
            style={styles.ea_logo}
          ></Image>
          <Text style={styles.ea_title}>
            Hey, ich bin dein{"\n"}Emergency Assist
          </Text>
          <Text style={styles.ea_paragraph}>
            Dein Helfer, wenn es drauf{"\n"}an kommt.
          </Text>
        </View>
      </View>

      <View style={styles.fingerprint_group}>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => props.navigation.navigate("Home")}
          style={styles.fingerprint_button}
        >
          <Image
            source={require("../assets/images/print1.png")}
            resizeMode="contain"
            style={styles.fingerprint_image}
          ></Image>
        </TouchableOpacity>
      </View>

      <Text style={styles.einstellungen}>Einstellungen</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // Generalizing

  container: {
    flex: 1,
    backgroundColor: colors.ea_blue
  },

  // Box

  bg_box_group: {
    height: 600,
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  bg_group: {
    height: 450,
    width: 300,
    marginTop: 100,
    justifyContent: "center",
    alignSelf: "center",
  },

  rect: {
    height: 500,
    backgroundColor: "rgba(255,255,255,1)",
    width: 300,
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

  ea_logo: {
    width: 200,
    height: 200,
    marginTop: 25,
    alignSelf: "center"
  },

  ea_title: {
    fontFamily: "poppins-600",
    color: colors.ea_blue,
    textAlign: "center",
    fontSize: 28,
    lineHeight: 30,
    width: 300,
    height: 70,
    marginTop: 30,
    alignSelf: "center"
  },

  ea_paragraph: {
    fontFamily: "poppins-300",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 20,
    width: 275,
    height: 60,
    marginTop: 10,
    alignSelf: "center"
  },

  fingerprint_group: {
    height: 115,
    marginTop: 0,
    justifyContent: "center",
    alignSelf: "center",
  },

  fingerprint_button: {
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

  fingerprint_image: {
    width: 58,
    height: 58,
    alignSelf: "center"
  },

  einstellungen: {
    fontFamily: "poppins-300",
    position: "absolute",
    bottom: 0,
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 28,
    marginBottom: 15,
    alignSelf: "center"
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
  
});

export default Login;
