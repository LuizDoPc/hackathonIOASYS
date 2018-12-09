import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Caronista from './source/components/Caronista';
import NavText from './source/components/NavText'
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component{
  render() {
    const AppNavigator = createAppContainer(createStackNavigator({
      Caronista: {screen: Caronista, navigationOptions: ({ navigation }) => ({
        title: `Caronista`,
      })},
      NavText: { screen: NavText}
    },  {
      initialRouteName: "Caronista"
    }));

    return (

        <AppNavigator/>
    );
  }
}