import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Caronista from './source/components/Caronista';
import NavText from './source/components/NavText'
import Login from './source/screens/Login'
import IniciarCarona from './source/screens/IniciarCarona'

export default class App extends Component{
  render() {
    const AppNavigator = createAppContainer(createStackNavigator({
      Caronista: {screen: Caronista, navigationOptions: ({ navigation }) => ({
        title: `Caronista`,
      })},
      NavText: { screen: NavText },
      Login: { screen: Login },
      IniciarCarona: { screen: IniciarCarona }
    },  {
      initialRouteName: "Login",
      headerMode: 'none',
    }));
    return (

        <AppNavigator/>
    );
  }
}