import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import Svg, { Ellipse } from "react-native-svg";
import KeyboardSpacer from 'react-native-keyboard-spacer';

import NavigationBack from '../components/NavigationBack';

import Aichat from '../components/ai_chat';


// components
import Touch from '../components/Touch';

const EmergencyChat = ({ navigation, screenProps }) => {
  const theme = useTheme();

  return (
    <View style={gStyle.container[theme]}>
      <View contentContainerStyle={gStyle.contentContainer}>
        
        <View style={gStyle.section_group_chat}>
            <Text style={gStyle.section}>Dein Chat:</Text>
        </View>
      </View>
      <Aichat></Aichat>
      <KeyboardSpacer topSpacing={100}/>
    </View>
  );
};

EmergencyChat.navigationOptions = ({ theme, navigation }) => {
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


EmergencyChat.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default EmergencyChat;
