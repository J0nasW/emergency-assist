import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Header from "../components/Header";

import Home from "../screens/Home";
import Emergency from "../screens/Emergency";
import Identity from "../screens/Identity";
import Login from "../screens/Login";


const screens = {
    Home: {
        screen: Home,
        NavigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
    Identity: {
        screen: Identity,
        NavigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
    Emergency: {
        screen: Emergency,
        NavigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
    Login: {
        screen: Login,
        NavigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#121212",
        headerStyle: { height: 60 },
    }
});

export default HomeStack;