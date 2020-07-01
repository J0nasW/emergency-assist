import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";

import {colors, dimensions} from '../styles/base.js';

function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor="rgba(255,255,255,1)"
      />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.nav_button}
        >
          <IoniconsIcon name="ios-menu" style={styles.nav_icon}></IoniconsIcon>
        </TouchableOpacity>
        <View style={styles.header_text_row}>
          <View style={styles.header_text_group}>
            <View style={styles.header_text_group_2}>
              <Text style={styles.header_text}>Lukas Müller</Text>
              <EntypoIcon name="chevron-down" style={styles.header_text_icon}></EntypoIcon>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Identity")}
          style={styles.header_id_button}
        >
          <View style={styles.header_id_image_group}>
            <Image
              source={require("../assets/images/image_hlAY..png")}
              resizeMode="contain"
              style={styles.header_id_image}
            ></Image>
            <Svg viewBox="0 0 45.25 45.25" style={styles.header_id_circle}>
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
      
      <View style={styles.section_group_row}>
        <Text style={styles.section}>Auf einen Blick:</Text>
        <View style={styles.section_filler}></View>
        <Text style={styles.section_option}>Bearbeiten</Text>
      </View>

      <View style={styles.big_button_group}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Emergency")}
          style={styles.big_button_1}
        >
          <View style={styles.big_button_image}>
            <Image
              source={require("../assets/images/Alert.png")}
              resizeMode="contain"
              style={styles.big_button_image_prop}
            ></Image>
            <View style={styles.big_button_header_group}>
              <Text style={styles.big_button_p}>Ich habe einen</Text>
              <Text style={styles.big_button_header}>Notfall</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.big_button_group}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Emergency")}
          style={styles.big_button_2}
        >
          <View style={styles.big_button_image}>
            <Image
              source={require("../assets/images/map1.png")}
              resizeMode="contain"
              style={styles.big_button_image_prop}
            ></Image>
            <View style={styles.big_button_header_group}>
              <Text style={styles.big_button_p}>Wo ist der nächste</Text>
              <Text style={styles.big_button_header}>Arzt?</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section_group_row}>
        <Text style={styles.section}>Deine Services:</Text>
        <View style={styles.section_filler}></View>
        <Text style={styles.section_option}>Alle anzeigen</Text>
      </View>
      
      <View style={styles.services}>
        <View style={styles.chat_groupRow}>
          <View style={styles.chat_group}>
            <View style={styles.button1Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button1}
            >
              <Image
                source={require("../assets/images/Chat.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <View style={styles.chatRow}>
                <Text style={styles.chat}>Chat</Text>
                <FeatherIcon
                  name="arrow-right"
                  style={styles.icon}
                ></FeatherIcon>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.call_group}>
            <View style={styles.button2Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button2}
            >
              <Image
                source={require("../assets/images/call.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <View style={styles.anrufRow}>
                <Text style={styles.anruf}>Anruf</Text>
                <FeatherIcon
                  name="arrow-right"
                  style={styles.icon1}
                ></FeatherIcon>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.doc_groupRow}>
          <View style={styles.doc_group}>
            <View style={styles.button4Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button4}
            >
              <Image
                source={require("../assets/images/doc.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <View style={styles.akteRow}>
                <Text style={styles.akte}>Akte</Text>
                <FeatherIcon
                  name="arrow-right"
                  style={styles.icon3}
                ></FeatherIcon>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.identity_group}>
            <View style={styles.button3Filler}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button3}
            >
              <Image
                source={require("../assets/images/qr.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <View style={styles.identitatRow}>
                <Text style={styles.identitat}>Identität</Text>
                <FeatherIcon
                  name="arrow-right"
                  style={styles.icon2}
                ></FeatherIcon>
              </View>
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
    flex: 1,
    backgroundColor: '#fff'
  },

  // HEADER PROPERTIES
  header: {
    height: 45,
    flexDirection: "row",
    marginTop: 10
  },

  nav_button: {
    width: 30,
    height: 40,
    marginLeft: 12,
    alignSelf: "center"
  },

  nav_icon: {
    color: "rgba(29,75,115,1)",
    fontSize: 38
  },

  header_text_row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },

  header_text_group: {
    width: 160,
    height: 27,
    flexDirection: "row",
    marginTop: 9
  },

  header_text_group_2: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 11
  },

  header_text: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18
  },

  header_text_icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 4
  },

  header_id_button: {
    width: 45,
    height: 45,
    marginRight: 13,
    alignSelf: "center"
  },

  header_id_image_group: {
    width: 45,
    height: 45
  },

  header_id_image: {
    position: "absolute",
    height: 39,
    width: 39,
    left: 3,
    top: 3
  },

  header_id_circle: {
    width: 45,
    height: 45,
    position: "absolute",
    left: 0,
    top: 0
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

  section_filler: {
    flex: 1,
    flexDirection: "row"
  },
  
  // Big Buttons
  big_button_group: {
    height: 80,
    marginTop: 20
  },
  big_button_1: {
    height: 80,
    backgroundColor: "rgba(251,33,98,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: 320,
    alignSelf: "center"
  },
  big_button_image: {
    height: 54,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 17,
    marginRight: 18
  },
  big_button_image_prop: {
    width: 42,
    height: 42,
    marginTop: 6
  },
  big_button_header_group: {
    width: 220,
    marginLeft: 20
  },
  big_button_header: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    lineHeight: 32,
    flex: 1,
    marginRight: 104
  },
  big_button_p: {
    fontFamily: "poppins-300",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 26,
    flex: 1
  },
  big_button_header_2: {
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
  big_button_p_2: {
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
  big_button_2: {
    height: 80,
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
    width: 320,
    flexDirection: "row",
    alignSelf: "center"
  },



  headings_1: {
    height: 27,
    flexDirection: "row",
    marginTop: 92
  },
  aufEinenBlick: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18,
    marginLeft: 17
  },
  aufEinenBlickFiller: {
    flex: 1,
    flexDirection: "row"
  },
  bearbeiten: {
    fontFamily: "poppins-regular",
    color: "rgba(29,75,115,1)",
    fontSize: 14,
    textAlign: "right",
    marginRight: 13,
    marginTop: 3
  },
  headings_2: {
    height: 27,
    flexDirection: "row",
    marginTop: 224
  },
  deineServices: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 18,
    marginLeft: 16
  },
  deineServicesFiller: {
    flex: 1,
    flexDirection: "row"
  },
  alleAnzeigen: {
    fontFamily: "poppins-regular",
    color: "rgba(29,75,115,1)",
    fontSize: 14,
    textAlign: "right",
    marginRight: 15,
    marginTop: 3
  },
  services: {
    width: 304,
    height: 303,
    marginTop: 23,
    alignSelf: "center"
  },
  chat_group: {
    width: 141,
    height: 141
  },
  button1Filler: {
    flex: 1
  },
  button1: {
    height: 141,
    backgroundColor: "rgba(96,174,191,1)",
    borderRadius: 20,
    width: 141
  },
  image3: {
    width: 47,
    height: 47,
    marginTop: 36,
    marginLeft: 47
  },
  chat: {
    fontFamily: "poppins-600",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    lineHeight: 22,
    alignSelf: "flex-end",
    marginBottom: 4
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 29,
    width: 29,
    marginLeft: 24,
    marginTop: -1
  },
  chatRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 16,
    marginRight: 9
  },
  call_group: {
    width: 141,
    height: 141,
    flexDirection: "row",
    marginLeft: 22
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button2: {
    height: 141,
    backgroundColor: "rgba(251,102,96,1)",
    borderRadius: 20,
    width: 141,
    alignSelf: "flex-end"
  },
  image4: {
    width: 42,
    height: 42,
    marginTop: 39,
    marginLeft: 50
  },
  anruf: {
    fontFamily: "poppins-600",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    lineHeight: 22,
    alignSelf: "flex-end",
    marginBottom: 4
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 29,
    width: 29,
    marginLeft: 29,
    marginTop: -1
  },
  anrufRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 12,
    marginRight: 6
  },
  chat_groupRow: {
    height: 141,
    flexDirection: "row"
  },
  doc_group: {
    width: 141,
    height: 141
  },
  button4Filler: {
    flex: 1
  },
  button4: {
    height: 141,
    backgroundColor: "rgba(239,212,119,1)",
    borderRadius: 20,
    width: 141
  },
  image2: {
    width: 47,
    height: 47,
    marginTop: 39,
    marginLeft: 47
  },
  akte: {
    fontFamily: "poppins-600",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    lineHeight: 22,
    alignSelf: "flex-end",
    marginBottom: 3
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 29,
    width: 29,
    marginLeft: 23
  },
  akteRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 14,
    marginRight: 9
  },
  identity_group: {
    width: 141,
    height: 141,
    flexDirection: "row",
    marginLeft: 22
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    height: 141,
    backgroundColor: "rgba(206,222,222,1)",
    borderRadius: 20,
    width: 141,
    alignSelf: "flex-end"
  },
  image: {
    width: 47,
    height: 47,
    marginTop: 39,
    marginLeft: 48
  },
  identitat: {
    fontFamily: "poppins-600",
    color: "rgba(29,75,115,1)",
    fontSize: 20,
    lineHeight: 22,
    alignSelf: "flex-end",
    marginBottom: 3
  },
  icon2: {
    color: "rgba(29,75,115,1)",
    fontSize: 29,
    height: 29,
    width: 29
  },
  identitatRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 6
  },
  doc_groupRow: {
    height: 141,
    flexDirection: "row",
    marginTop: 21
  },
  button7: {
    height: 82,
    marginTop: -557
  },
  button5: {
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
  image5: {
    width: 48,
    height: 48
  },
  ichHabeEinen3: {
    fontFamily: "poppins-300",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 26,
    flex: 1
  },
  notfall3: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    lineHeight: 32,
    flex: 1,
    marginRight: 104
  },
  ichHabeEinen3Column: {
    width: 224,
    marginLeft: 14
  },
  image5Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 24,
    marginRight: 9
  },
  button13: {
    height: 82,
    marginTop: 13
  },
  button14: {
    height: 82,
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
    width: 319,
    alignSelf: "center"
  },
  image9: {
    width: 45,
    height: 45,
    marginTop: 3
  },
  woIstDerNachste2: {
    fontFamily: "poppins-300",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 26,
    flex: 1,
    marginBottom: 2
  },
  arzt3: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    lineHeight: 32,
    flex: 1,
    marginTop: 2,
    marginRight: 104
  },
  woIstDerNachste2Column: {
    width: 224,
    marginLeft: 19
  },
  image9Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 22,
    marginRight: 9
  },
  hEader1: {
    height: 45,
    flexDirection: "row",
    marginTop: -285
  },
  button16: {
    width: 29,
    height: 41,
    marginLeft: 13,
    alignSelf: "center"
  },
  icon5: {
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
  icon4: {
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
  button16Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button15: {
    width: 45,
    height: 45,
    marginRight: 13,
    alignSelf: "center"
  },
  image10: {
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
  image10Stack: {
    width: 45,
    height: 45
  }
});

export default Home;
