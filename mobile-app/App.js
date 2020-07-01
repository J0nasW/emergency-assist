import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env';

import Home from "./src/screens/Home";
import Emergency from "./src/screens/Emergency";
import Identity from "./src/screens/Identity";
import Login from "./src/screens/Login";
import Chat from "./src/screens/Chat";

import {  LocalAuthentication } from 'expo';

function fingerprint() {
  hardware = LocalAuthentication.hasHardwareAsync();
  console.error("yes");
  return (hardware);
} // Still in Development...

// CHATBOT


const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  Home: Home,
  Emergency: Emergency,
  Chat: Chat,
  Identity: Identity
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login: Login,
    Home: Home,
    Emergency: Emergency,
    Chat: Chat,
    Identity: Identity
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "poppins-500": require("./src/assets/fonts/poppins-500.ttf"),
      "poppins-300": require("./src/assets/fonts/poppins-300.ttf"),
      "poppins-700": require("./src/assets/fonts/poppins-700.ttf"),
      "poppins-200": require("./src/assets/fonts/poppins-200.ttf"),
      "poppins-regular": require("./src/assets/fonts/poppins-regular.ttf"),
      "poppins-600": require("./src/assets/fonts/poppins-600.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;