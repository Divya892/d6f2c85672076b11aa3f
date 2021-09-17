import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import { Provider } from 'react-redux';
import configureStore from './app/redux/config/store/index';
console.disableYellowBox=true

export interface Props {
  navigation: any;
  id: string;
}

interface S {
  country: any;
  countryData: any
}

interface SS {
  id: any;
}



class App extends Component<Props, S, SS> {

  constructor(props: any) {
    super(props);
    this.state = {
      store: configureStore(() => {
      }).store
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <NavigationContainer>
          <RootStackScreen isLoggedIn={this.state.isLoggedIn} isOnBoardingCompleted={this.state.isOnBoardingCompleted} toggleTheme={this.toggleTheme} />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
