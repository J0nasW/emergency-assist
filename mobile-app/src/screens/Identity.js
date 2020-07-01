import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Center } from "@builderx/utils";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";

function Identity(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headings1Stack}>
        <View style={styles.headings1}>
          <Text style={styles.deineIdentitat}>Deine Identität:</Text>
          <View style={styles.deineIdentitatFiller}></View>
          <Text style={styles.bearbeiten3}>Bearbeiten</Text>
        </View>
        <Center horizontal>
          <View style={styles.chatGroup1}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button1}
            >
              <Image
                source={require("../assets/images/qr_code.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </Center>
      </View>
      <View style={styles.headings2}>
        <Text style={styles.infosUberDich}>Infos über dich:</Text>
        <View style={styles.infosUberDichFiller}></View>
        <Text style={styles.bearbeiten4}>Bearbeiten</Text>
      </View>
      <View style={styles.hEader1}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button3}
        >
          <IoniconsIcon name="ios-menu" style={styles.icon2}></IoniconsIcon>
        </TouchableOpacity>
        <View style={styles.button3Filler}>
          <View style={styles.group1}>
            <View style={styles.lukasMuller1Row}>
              <Text style={styles.lukasMuller1}>Lukas Müller</Text>
              <EntypoIcon name="chevron-down" style={styles.icon1}></EntypoIcon>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Identity")}
          style={styles.button2}
        >
          <View style={styles.image1Stack}>
            <Image
              source={require("../assets/images/image_hlAY..png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
            <Svg viewBox="0 0 45.25 45.25" style={styles.ellipse1}>
              <Ellipse
                stroke="rgba(29,75,115,1)"
                strokeWidth={2}
                cx={23}
                cy={23}
                rx={22}
                ry={22}
              ></Ellipse>
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headings1: {
    top: 0,
    height: 27,
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row"
  },
  deineIdentitat: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18,
    marginLeft: 17
  },
  deineIdentitatFiller: {
    flex: 1,
    flexDirection: "row"
  },
  bearbeiten3: {
    fontFamily: "poppins-regular",
    color: "rgba(29,75,115,1)",
    fontSize: 14,
    textAlign: "right",
    marginRight: 16,
    marginTop: 3
  },
  chatGroup1: {
    top: 21,
    width: 309,
    height: 324,
    position: "absolute",
    justifyContent: "center"
  },
  button1: {
    height: 278,
    backgroundColor: "rgba(29,75,115,1)",
    borderRadius: 40,
    width: 278,
    justifyContent: "center",
    alignSelf: "center"
  },
  image: {
    width: 259,
    height: 259,
    alignSelf: "center"
  },
  headings1Stack: {
    height: 345,
    marginTop: 91
  },
  headings2: {
    height: 27,
    flexDirection: "row",
    marginTop: 1
  },
  infosUberDich: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18,
    marginLeft: 20
  },
  infosUberDichFiller: {
    flex: 1,
    flexDirection: "row"
  },
  bearbeiten4: {
    fontFamily: "poppins-regular",
    color: "rgba(29,75,115,1)",
    fontSize: 14,
    textAlign: "right",
    marginRight: 14,
    marginTop: 3
  },
  hEader1: {
    height: 45,
    flexDirection: "row",
    marginTop: -433
  },
  button3: {
    width: 29,
    height: 41,
    marginLeft: 13,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(29,75,115,1)",
    fontSize: 38
  },
  group1: {
    width: 157,
    height: 27,
    flexDirection: "row",
    marginTop: 9
  },
  lukasMuller1: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 4
  },
  lukasMuller1Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 11
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button2: {
    width: 45,
    height: 45,
    marginRight: 13,
    alignSelf: "center"
  },
  image1: {
    position: "absolute",
    height: 39,
    width: 39,
    left: 3,
    top: 3
  },
  ellipse1: {
    width: 45,
    height: 45,
    position: "absolute",
    left: 0,
    top: 0
  },
  image1Stack: {
    width: 45,
    height: 45
  }
});

export default Identity;
