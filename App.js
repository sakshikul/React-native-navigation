import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HomeScreen from './Home';
import Profile from './Profile';
import Testing from './Testing';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: Profile},
  Testing : {screen : Testing}
});

const App = createAppContainer(MainNavigator);




export default App;
