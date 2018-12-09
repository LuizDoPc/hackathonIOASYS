import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './source/screens/Login';
import Home from './source/screens/Home';
import IniciarCarona from './source/screens/IniciarCarona';
import Cadastro from './source/screens/Cadastro';
import Ponto from './source/components/Ponto';
import Carona from './source/screens/Carona';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  IniciarCarona: { screen: IniciarCarona },
  Home: { screen: Home },
  Cadastro: { screen: Cadastro },
  Ponto: { screen: Ponto },
  Carona: { screen: Carona }
},  
{
  initialRouteName: "Login",
  headerMode: 'none',
});

class App extends Component{
  render() {
    return (
        <AppNavigator/>
    );
  }
}

export default createAppContainer(AppNavigator);