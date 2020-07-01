import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import {colors, dimensions} from '../styles/base.js';

import Header from "../components/Header";

import Home from "../screens/Home";
import Emergency from "../screens/Emergency";
import Identity from "../screens/Identity";
import Login from "../screens/Login";


const screens = {
    Emergency: {
        screen: Emergency,
        NavigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default createAppContainer(HomeStack);