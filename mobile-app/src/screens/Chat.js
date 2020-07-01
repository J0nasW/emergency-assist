import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar, Text, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import {colors, dimensions} from '../styles/base.js';

import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../env';

function Chat(props) {

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

      <View style={styles.section_group}>
        <Text style={styles.section}>Chat:</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={onSend.state.messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1
          }}
        />
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
    width: 220,
    lineHeight: 34,
    height: 36
  },
  big_button_p: {
    fontFamily: "poppins-200",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    width: 200,
    lineHeight: 14,
    height: 18
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
    width: 320,
    flexDirection: "row",
    alignSelf: "center"
  },
  
  // Tiles

  tile_group_2x2: {
    width: 310,
    height: 310,
    alignSelf: "center"
  },

  tile_group_1x2: {
    height: 140,
    flexDirection: "row",
    marginTop: 21
  },

  tile_l: {
    width: 140,
    height: 140,
    marginRight: 10
  },

  tile_r: {
    width: 140,
    height: 140,
    marginLeft: 10,
  },

  // Built

  
  group: {
    width: 304,
    height: 303,
    marginTop: 19,
    alignSelf: "center"
  },
  eR_1: {
    width: 141,
    height: 141,
    marginLeft: 10,
    marginRight: 10
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

export default Chat;
