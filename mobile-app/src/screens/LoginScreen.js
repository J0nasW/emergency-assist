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

const LoginScreen = ({ navigation }) => {
  return (
      <ScrollView contentContainerStyle={gStyle.login_container}>
        
      <View style={gStyle.bg_group}>
        <View style={gStyle.rect}>
          <Image
            source={require("../assets/images/Emergency_Assist_web1.png")}
            resizeMode="contain"
            style={gStyle.ea_logo}
          ></Image>
          <Text style={gStyle.ea_title}>
            Hey, ich bin dein{"\n"}Emergency Assist
          </Text>
          <Text style={gStyle.ea_paragraph}>
            Dein Helfer, wenn es drauf{"\n"}an kommt.
          </Text>
        </View>
      </View>

      <View style={gStyle.fingerprint_group}>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => navigation.navigate("Home")}
          style={gStyle.fingerprint_button}
        >
          <Image
            source={require("../assets/images/print1.png")}
            resizeMode="contain"
            style={gStyle.fingerprint_image}
          ></Image>
        </TouchableOpacity>
      </View>

      <Text style={gStyle.einstellungen}>Einstellungen</Text>

      </ScrollView>
  );
};

LoginScreen.navigationOptions =  {
    header: null,
};


LoginScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default LoginScreen;
