import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import {colors, dimensions} from '../styles/base.js';

function Emergency(props) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button14}
        >
          <IoniconsIcon name="ios-menu" style={styles.icon2}></IoniconsIcon>
        </TouchableOpacity>
        <View style={styles.button14Filler}>
          <View style={styles.group1}>
            <View style={styles.lukasMuller1Row}>
              <Text style={styles.lukasMuller1}>Lukas Müller</Text>
              <EntypoIcon name="chevron-down" style={styles.icon1}></EntypoIcon>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Identity")}
          style={styles.button13}
        >
          <View style={styles.image19Stack}>
            <Image
              source={require("../assets/images/image_hlAY..png")}
              resizeMode="contain"
              style={styles.image19}
            ></Image>
            <Svg viewBox="0 0 45.25 45.25" style={styles.ellipse7}>
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


      <View style={styles.section_group}>
        <Text style={styles.section}>Du hast einen Notfall:</Text>
      </View>
      <View style={styles.nOtfall1}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button1}
        >
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/call.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <View style={styles.rufUnsAnColumn}>
              <Text style={styles.rufUnsAn}>Ruf uns an</Text>
              <Text style={styles.ichHabeEinen1}>Powered by EA VoiceAI</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.aRzt1}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button2}
        >
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/Chat.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <View style={styles.erzahlUnsStack}>
              <Text style={styles.erzahlUns}>Erzähl uns,</Text>
              <Text style={styles.wasDirFehlt}>was dir fehlt</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.section_group_row}>
        <Text style={styles.section}>Notaufnahmen:</Text>
        <View style={styles.notaufnahmenFiller}></View>
        <Text style={styles.section_option}>Alle anzeigen</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.eR_1Row}>
          <View style={styles.eR_1}>
            <View style={styles.button3Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button3}
            >
              <Image
                source={require("../assets/images/akh.png")}
                resizeMode="contain"
                style={styles.image9}
              ></Image>
              <Text style={styles.akHarburg}>AK{"\n"}Harburg</Text>
              <View style={styles.ellipseRow}>
                <Svg viewBox="0 0 20 20" style={styles.ellipse}>
                  <Ellipse
                    strokeWidth={0}
                    fill="rgba(31,189,161,1)"
                    cx={10}
                    cy={10}
                    rx={10}
                    ry={10}
                  ></Ellipse>
                </Svg>
                <View style={styles.echtzeitTrackingStack}>
                  <Text style={styles.echtzeitTracking}>
                    Echtzeit Tracking:
                  </Text>
                  <Text style={styles.geringeAuslastung}>
                    Geringe Auslastung
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.eR5}>
            <View style={styles.button10Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.button10}
              >
                <Image
                  source={require("../assets/images/helios.png")}
                  resizeMode="contain"
                  style={styles.image16}
                ></Image>
                <View style={styles.ellipse4Row}>
                  <Svg viewBox="0 0 20 20" style={styles.ellipse4}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(251,102,96,1)"
                      cx={10}
                      cy={10}
                      rx={10}
                      ry={10}
                    ></Ellipse>
                  </Svg>
                  <View style={styles.echtzeitTracking4Stack}>
                    <Text style={styles.echtzeitTracking4}>
                      Echtzeit Tracking:
                    </Text>
                    <Text style={styles.mittlereAuslastung}>
                      Mittlere Auslastung
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Text style={styles.heliosMariaHilf}>
                Helios{"\n"}Maria Hilf ..
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.eR7Row}>
          <View style={styles.eR7}>
            <View style={styles.button12Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button12}
            >
              <Image
                source={require("../assets/images/uke.png")}
                resizeMode="contain"
                style={styles.image17}
              ></Image>
              <Text style={styles.ukeHamburg}>UKE{"\n"}Hamburg</Text>
              <View style={styles.ellipse6Row}>
                <Svg viewBox="0 0 20 20" style={styles.ellipse6}>
                  <Ellipse
                    strokeWidth={0}
                    fill="rgba(189,31,31,1)"
                    cx={10}
                    cy={10}
                    rx={10}
                    ry={10}
                  ></Ellipse>
                </Svg>
                <View style={styles.echtzeitTracking7Stack}>
                  <Text style={styles.echtzeitTracking7}>
                    Echtzeit Tracking:
                  </Text>
                  <Text style={styles.hoheAuslastung}>Hohe Auslastung</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.eR6}>
            <View style={styles.button11Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button11}
            >
              <Image
                source={require("../assets/images/map_b.png")}
                resizeMode="contain"
                style={styles.image18}
              ></Image>
              <Text style={styles.zurKarte}>Zur Karte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // Generalizing
  container: {
    flex: 1
  },

  // HEADER PROPERTIES
  header: {
    height: 45,
    flexDirection: "row",
    marginTop: 10
  },


  //Section Properties
  section_group: {
    height: 30,
    justifyContent: "center",
    marginTop: 20
  },
  section_group_row: {
    height: 30,
    flexDirection: "row",
    marginTop: 20
  },
  section: {
    fontFamily: "poppins-500",
    color: colors.black,
    fontSize: 18,
    marginLeft: 15
  },
  section_option: {
      fontFamily: "poppins-regular",
      color: colors.ea_blue,
      fontSize: 14,
      textAlign: "right",
      marginRight: 15,
      marginTop: 2
  },
  

  // Built

  headings1: {
    height: 27,
    justifyContent: "center",
    marginTop: 92
  },
  deineIdentitat1: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18,
    marginLeft: 16
  },
  nOtfall1: {
    height: 82,
    marginTop: 21
  },
  button1: {
    height: 82,
    backgroundColor: "rgba(251,33,98,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: 319,
    alignSelf: "center"
  },
  image2: {
    width: 42,
    height: 42,
    marginTop: 6
  },
  rufUnsAn: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 221,
    lineHeight: 34,
    height: 36
  },
  ichHabeEinen1: {
    fontFamily: "poppins-200",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    width: 192,
    lineHeight: 14,
    height: 18
  },
  rufUnsAnColumn: {
    width: 221,
    marginLeft: 21
  },
  image2Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 17,
    marginRight: 18
  },
  aRzt1: {
    height: 82,
    marginTop: 12
  },
  button2: {
    height: 82,
    backgroundColor: "rgba(29,75,115,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: 319,
    flexDirection: "row",
    alignSelf: "center"
  },
  image4: {
    width: 47,
    height: 47,
    marginTop: 7
  },
  erzahlUns: {
    top: 0,
    position: "absolute",
    fontFamily: "poppins-300",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    left: 0,
    width: 178,
    lineHeight: 26,
    height: 30
  },
  wasDirFehlt: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 229,
    lineHeight: 34,
    height: 36,
    top: 26
  },
  erzahlUnsStack: {
    width: 229,
    height: 62,
    marginLeft: 21
  },
  image4Row: {
    height: 62,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 14,
    marginTop: 11
  },
  
  notaufnahmen: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18,
    marginLeft: 16
  },
  notaufnahmenFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group: {
    width: 304,
    height: 303,
    marginTop: 19,
    alignSelf: "center"
  },
  eR_1: {
    width: 141,
    height: 141
  },
  button3Filler: {
    flex: 1
  },
  button3: {
    height: 141,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 20,
    width: 141
  },
  image9: {
    width: 34,
    height: 34,
    marginTop: 11,
    marginLeft: 11
  },
  akHarburg: {
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    lineHeight: 23,
    width: 107,
    height: 46,
    marginTop: 4,
    marginLeft: 12
  },
  ellipse: {
    width: 20,
    height: 20,
    marginTop: -1
  },
  echtzeitTracking: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-300",
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 0,
    width: 106,
    height: 13
  },
  geringeAuslastung: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 11,
    letterSpacing: -0.5,
    width: 106,
    height: 13
  },
  echtzeitTrackingStack: {
    width: 106,
    height: 24,
    marginLeft: 4
  },
  ellipseRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 11
  },
  eR5: {
    width: 141,
    height: 141,
    marginLeft: 22
  },
  button10: {
    height: 141,
    position: "absolute",
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 20,
    left: 0,
    width: 141,
    bottom: 0
  },
  image16: {
    width: 34,
    height: 34,
    marginTop: 11,
    marginLeft: 11
  },
  ellipse4: {
    width: 20,
    height: 20,
    marginTop: -1
  },
  echtzeitTracking4: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-300",
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 0,
    width: 104,
    height: 12
  },
  mittlereAuslastung: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 11,
    letterSpacing: -0.5,
    width: 106,
    height: 12
  },
  echtzeitTracking4Stack: {
    width: 106,
    height: 23,
    marginLeft: 4
  },
  ellipse4Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 63,
    marginLeft: 11
  },
  heliosMariaHilf: {
    left: 12,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    lineHeight: 23,
    top: 49,
    width: 145,
    height: 47
  },
  button10Stack: {
    width: 157,
    height: 141
  },
  eR_1Row: {
    height: 141,
    flexDirection: "row"
  },
  eR7: {
    width: 141,
    height: 141
  },
  button12Filler: {
    flex: 1
  },
  button12: {
    height: 141,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 20,
    width: 141
  },
  image17: {
    width: 35,
    height: 35,
    marginTop: 11,
    marginLeft: 11
  },
  ukeHamburg: {
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    lineHeight: 23,
    width: 110,
    height: 46,
    marginTop: 3,
    marginLeft: 12
  },
  ellipse6: {
    width: 20,
    height: 20,
    marginTop: -1
  },
  echtzeitTracking7: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-300",
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 0,
    width: 106,
    height: 13
  },
  hoheAuslastung: {
    left: 0,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 11,
    letterSpacing: -0.5,
    width: 103,
    height: 14
  },
  echtzeitTracking7Stack: {
    width: 106,
    height: 25,
    marginLeft: 4
  },
  ellipse6Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 11
  },
  eR6: {
    width: 141,
    height: 141,
    marginLeft: 22
  },
  button11Filler: {
    flex: 1
  },
  button11: {
    height: 141,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 20,
    width: 141
  },
  image18: {
    width: 66,
    height: 66,
    marginTop: 15,
    marginLeft: 38
  },
  zurKarte: {
    fontFamily: "poppins-600",
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    lineHeight: 23,
    width: 120,
    textAlign: "center",
    height: 25,
    marginTop: 15,
    marginLeft: 11
  },
  eR7Row: {
    height: 141,
    flexDirection: "row",
    marginTop: 21
  },
  button14: {
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
  button14Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button13: {
    width: 45,
    height: 45,
    marginRight: 13,
    alignSelf: "center"
  },
  image19: {
    position: "absolute",
    height: 39,
    width: 39,
    left: 3,
    top: 3
  },
  ellipse7: {
    width: 45,
    height: 45,
    position: "absolute",
    left: 0,
    top: 0
  },
  image19Stack: {
    width: 45,
    height: 45
  }
});

export default Emergency;
