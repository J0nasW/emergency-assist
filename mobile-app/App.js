import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font";

import Navigator from "./src/routes/Drawer";

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
    return isLoadingComplete ? <Navigator /> : <AppLoading />;
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
