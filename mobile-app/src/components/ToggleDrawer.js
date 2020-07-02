import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';
import IoniconsIcon from "react-native-vector-icons/Ionicons";

// icons
import SvgCircleLeft from './icons/Svg.CircleLeft';

const NavigationBack = ({ navigation }) => (
  <TouchableOpacity
    accessible
    accessibilityLabel="toggle nav"
    accessibilityComponentType="button"
    accessibilityTraits="button"
    activeOpacity={gStyle.activeOpacity}
    onPress={() => navigation.openDrawer()}
    style={gStyle.nav_button}
  >
    <IoniconsIcon name="ios-menu" style={gStyle.nav_icon}></IoniconsIcon>
  </TouchableOpacity>
);

NavigationBack.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default NavigationBack;