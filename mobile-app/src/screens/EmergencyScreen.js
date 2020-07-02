import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Svg, { Ellipse } from "react-native-svg";

import NavigationBack from '../components/NavigationBack';

// components
import Touch from '../components/Touch';

const EmergencyScreen = ({ navigation, screenProps }) => {
  const theme = useTheme();

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        
        <View style={gStyle.section_group}>
            <Text style={gStyle.section}>Du hast einen Notfall:</Text>
        </View>

        <View style={gStyle.big_button_group}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={gStyle.big_button_1}
            >
            <View style={gStyle.big_button_image}>
                <Image
                source={require("../assets/images/call.png")}
                resizeMode="contain"
                style={gStyle.big_button_image_prop}
                ></Image>
                <View style={gStyle.big_button_header_group}>
                    <Text style={gStyle.big_button_header}>Ruf uns an</Text>
                    <Text style={gStyle.big_button_sub}>Powered by EA VoiceAI</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>

        <View style={gStyle.big_button_group}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            style={gStyle.big_button_2}
            >
            <View style={gStyle.big_button_image}>
                <Image
                source={require("../assets/images/Chat.png")}
                resizeMode="contain"
                style={gStyle.big_button_image_prop}
                ></Image>
                <View style={gStyle.big_button_header_group}>
                <Text style={gStyle.big_button_header_2}>Erzähl uns,</Text>
                <Text style={gStyle.big_button_p_2}>was dir fehlt</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>

        <View style={[gStyle.section_group_row, gStyle.section_group_padding]}>
            <Text style={gStyle.section}>Notaufnahmen:</Text>
            <View style={gStyle.section_filler}></View>
            <Text style={gStyle.section_option}>Alle anzeigen</Text>
        </View>

        <View style={gStyle.tile_group_2x2}>
          <View style={gStyle.tile_group_1x2}>
            <View style={gStyle.tile_l}>
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={gStyle.tile_grey}
              >
                <Image
                source={require("../assets/images/akh.png")}
                resizeMode="contain"
                style={gStyle.tile_image}
                ></Image>
                <Text style={gStyle.hospital_text}>AK{"\n"}Harburg</Text>
                <View style={gStyle.ellipseRow}>
                    <Svg viewBox="0 0 20 20" style={gStyle.ellipse}>
                    <Ellipse
                        strokeWidth={0}
                        fill="rgba(31,189,161,1)"
                        cx={10}
                        cy={10}
                        rx={10}
                        ry={10}
                    ></Ellipse>
                    </Svg>
                    <View style={gStyle.tile_tracking_group}>
                    <Text style={gStyle.tile_tracking_title}>
                        Echtzeit Tracking:
                    </Text>
                    <Text style={gStyle.tile_tracking_content}>
                        Geringe Auslastung
                    </Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={gStyle.tile_r}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={gStyle.tile_grey}
              >
                <Image
                  source={require("../assets/images/helios.png")}
                  resizeMode="contain"
                  style={gStyle.tile_image}
                ></Image>
                <Text style={gStyle.hospital_text}>Helios{"\n"}Maria Hilf..</Text>
                <View style={gStyle.ellipseRow}>
                  <Svg viewBox="0 0 20 20" style={gStyle.ellipse}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(251,102,96,1)"
                      cx={10}
                      cy={10}
                      rx={10}
                      ry={10}
                    ></Ellipse>
                  </Svg>
                  <View style={gStyle.tile_tracking_group}>
                    <Text style={gStyle.tile_tracking_title}>
                      Echtzeit Tracking:
                    </Text>
                    <Text style={gStyle.tile_tracking_content}>
                      Mittlere Auslastung
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={gStyle.tile_group_1x2}>
            <View style={gStyle.tile_l}>
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={gStyle.tile_grey}
              >
                <Image
                source={require("../assets/images/uke.png")}
                resizeMode="contain"
                style={gStyle.tile_image}
                ></Image>
                <Text style={gStyle.hospital_text}>UKE{"\n"}Hamburg</Text>
                <View style={gStyle.ellipseRow}>
                    <Svg viewBox="0 0 20 20" style={gStyle.ellipse}>
                    <Ellipse
                        strokeWidth={0}
                        fill="rgba(189,31,31,1)"
                        cx={10}
                        cy={10}
                        rx={10}
                        ry={10}
                    ></Ellipse>
                    </Svg>
                    <View style={gStyle.tile_tracking_group}>
                    <Text style={gStyle.tile_tracking_title}>
                        Echtzeit Tracking:
                    </Text>
                    <Text style={gStyle.tile_tracking_content}>Hohe Auslastung</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={gStyle.tile_r}>
                <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={gStyle.tile_grey}
                >
                <Image
                    source={require("../assets/images/map_b.png")}
                    resizeMode="contain"
                    style={gStyle.tile_map}
                ></Image>
                <Text style={gStyle.tile_map_text}>Zur Karte</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

EmergencyScreen.navigationOptions = ({ theme, navigation }) => {
  return {
    headerLeft: <NavigationBack navigation={navigation} />,
    headerRight: (
      <View style={gStyle.header_id_image_group}>
        <Image
          source={require("../assets/images/profile.png")}
          resizeMode="contain"
          style={gStyle.header_id_image}
        ></Image>
        <Svg viewBox="0 0 45.25 45.25" style={gStyle.header_id_circle}>
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
    ),
    headerTitle: (
      <View style={{ flex: 1, alignSelf: 'center', alignItems: "center"}}>
        <Text style={[gStyle.text[theme], gStyle.header_text]}>Lukas Müller</Text>
      </View>
    )
  };
};


EmergencyScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default EmergencyScreen;
