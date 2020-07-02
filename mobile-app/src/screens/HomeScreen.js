import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Svg, { Ellipse } from "react-native-svg";

import ToggleDrawer from '../components/ToggleDrawer';

// components
import Touch from '../components/Touch';

const HomeScreen = ({ navigation, screenProps }) => {
  const theme = useTheme();

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        
        <View style={gStyle.section_group_row}>
          <Text style={[gStyle.text[theme], gStyle.section]}>Auf einen Blick:</Text>
          <View style={gStyle.section_filler}></View>
          <Text style={gStyle.section_option}>Bearbeiten</Text>
        </View>

        <View style={gStyle.big_button_group}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Emergency")}
            style={gStyle.big_button_1}
          >
            <View style={gStyle.big_button_image}>
              <Image
                source={require("../assets/images/Alert.png")}
                resizeMode="contain"
                style={gStyle.big_button_image_prop}
              ></Image>
              <View style={gStyle.big_button_header_group}>
                <Text style={gStyle.big_button_p}>Ich habe einen</Text>
                <Text style={gStyle.big_button_header}>Notfall</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={gStyle.big_button_group}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            style={gStyle.big_button_2}
          >
            <View style={gStyle.big_button_image}>
              <Image
                source={require("../assets/images/map1.png")}
                resizeMode="contain"
                style={gStyle.big_button_image_prop}
              ></Image>
              <View style={gStyle.big_button_header_group}>
                <Text style={gStyle.big_button_p}>Wo ist der nächste</Text>
                <Text style={gStyle.big_button_header}>Arzt?</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[gStyle.section_group_row, gStyle.section_group_padding]}>
          <Text style={[gStyle.text[theme], gStyle.section]}>Deine Services:</Text>
          <View style={gStyle.section_filler}></View>
          <Text style={gStyle.section_option}>Alle anzeigen</Text>
        </View>

        <View style={gStyle.tile_group_2x2}>
          <View style={gStyle.tile_group_1x2}>
            <View style={gStyle.tile_l}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={gStyle.tile_chat}
              >
                <Image
                  source={require("../assets/images/Chat.png")}
                  resizeMode="contain"
                  style={gStyle.tile_image}
                ></Image>
                <View style={gStyle.tile_row}>
                  <Text style={gStyle.tile_text}>Chat</Text>
                  <FeatherIcon
                    name="arrow-right"
                    style={gStyle.tile_icon}
                  ></FeatherIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={gStyle.tile_r}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={gStyle.tile_call}
              >
                <Image
                  source={require("../assets/images/call.png")}
                  resizeMode="contain"
                  style={gStyle.tile_image}
                ></Image>
                <View style={gStyle.tile_row}>
                  <Text style={gStyle.tile_text}>Anruf</Text>
                  <FeatherIcon
                    name="arrow-right"
                    style={gStyle.tile_icon}
                  ></FeatherIcon>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={gStyle.tile_group_1x2}>
            <View style={gStyle.tile_l}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={gStyle.tile_doc}
              >
                <Image
                  source={require("../assets/images/doc.png")}
                  resizeMode="contain"
                  style={gStyle.tile_image}
                ></Image>
                <View style={gStyle.tile_row}>
                  <Text style={gStyle.tile_text}>Akte</Text>
                  <FeatherIcon
                    name="arrow-right"
                    style={gStyle.tile_icon}
                  ></FeatherIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={gStyle.tile_r}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={gStyle.tile_identity}
              >
                <Image
                  source={require("../assets/images/qr.png")}
                  resizeMode="contain"
                  style={gStyle.tile_image}
                ></Image>
                <View style={gStyle.tile_row}>
                  <Text style={gStyle.tile_text_blue}>Identität</Text>
                  <FeatherIcon
                    name="arrow-right"
                    style={gStyle.tile_icon_blue}
                  ></FeatherIcon>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = ({ theme, navigation }) => {
  return {
    headerLeft: <ToggleDrawer navigation={navigation} />,
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


HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default HomeScreen;
