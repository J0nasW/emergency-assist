import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading, ScreenOrientation } from 'expo';
import { Appearance } from 'react-native-appearance';
import { device, func, gStyle } from './src/constants';

// tab navigator
import TabNavigator from './src/navigation/TabNavigator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      theme: 'light'
    };

    // is iPad?
    if (device.isPad) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }

    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount() {
    // get system preference
    const colorScheme = Appearance.getColorScheme();

    // if light or dark
    if (colorScheme !== 'no-preference') {
      this.setState({
        theme: colorScheme
      });
    }
  }

  updateTheme(themeType) {
    this.setState({
      theme: themeType
    });
  }

  render() {
    const { isLoading, theme } = this.state;
    const iOSStatusType = theme === 'light' ? 'dark-content' : 'light-content';

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <View style={gStyle.container[theme]}>
        <StatusBar barStyle={device.iOS ? iOSStatusType : 'light-content'} />

        <TabNavigator
          screenProps={{
            updateTheme: this.updateTheme
          }}
          theme={theme}
        />
      </View>
    );
  }
}

export default App;
