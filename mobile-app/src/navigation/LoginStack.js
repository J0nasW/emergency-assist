import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import LoginScreen from '../screens/LoginScreen';

// icons
import SvgCog from '../components/icons/Svg.Cog';

const SettingsTabBarIcon = ({ focused }) => <SvgCog active={focused} />;
SettingsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Settings Stack
// /////////////////////////////////////////////////////////////////////////////
const LoginStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: SettingsTabBarIcon
    }
  }
);

export default LoginStack;
