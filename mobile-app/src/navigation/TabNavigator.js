import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from "react-navigation-drawer";
import { colors } from '../constants';

// navigation stacks
import LoginStack from './LoginStack';
import HomeStack from './HomeStack';
import MultiStack from './MultiStack';
import StatsStack from './StatsStack';
import SettingsStack from './SettingsStack';

const TabNavigator = createDrawerNavigator(
  {
    LoginStack,
    HomeStack,
    MultiStack,
    StatsStack,
    SettingsStack
  },
  {
    initialRouteName: 'LoginStack',
    tabBarOptions: {
      activeTintColor: {
        light: colors.darkColor,
        dark: colors.grey
      },
      inactiveTintColor: {
        light: colors.grey,
        dark: colors.white20
      }
    }
  }
);

const App = createAppContainer(TabNavigator);

export default App;
