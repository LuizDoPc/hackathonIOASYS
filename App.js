import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './source/screens/Login';
import Home from './source/screens/Home';
import Home2 from './source/screens/Home2';
import IniciarCarona from './source/screens/IniciarCarona';
import Cadastro from './source/screens/Cadastro';
import Ponto from './source/components/Ponto';
import Carona from './source/screens/Carona';
import Carros from './source/screens/Carros';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  IniciarCarona: { screen: IniciarCarona },
  Home: { screen: Home },
  Home2: { screen: Home2 },
  Cadastro: { screen: Cadastro },
  Ponto: { screen: Ponto },
  Carona: { screen: Carona },
  Carros: { screen: Carros },
},  
{
  initialRouteName: "Home2",
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