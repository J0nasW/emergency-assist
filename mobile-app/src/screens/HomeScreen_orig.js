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
    



        
        <Text style={gStyle.text[theme]}>Home content area</Text>

        <View style={gStyle.spacer64} />

        <Touch
          onPress={() => navigation.navigate('MultiBase')}
          text="Jump to Multi tab"
        />

        <Touch
          onPress={() => screenProps.updateTheme('light')}
          text="Light theme"
        />
        <Touch
          onPress={() => screenProps.updateTheme('dark')}
          text="Dark theme"
        />
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
