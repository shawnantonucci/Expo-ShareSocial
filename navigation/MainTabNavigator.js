import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import TestScreen from './../screens/TestScreen';

const RootStack = createStackNavigator(
  {
    Home: TestScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class MainNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}﻿