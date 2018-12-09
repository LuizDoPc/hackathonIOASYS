import React, {Component} from 'react';
import {Image, View, TextInput, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Login extends Component{
  state = {
    value: ""
  }
  render() {
    return (
      <ImageBackground
        source = {require('../../img/bglogin.png')}
        style = {{width: '100%', height: '100%'}}
      >
        <View
          style={{backgroundColor: 'rgba(0, 0, 0, .8)', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
        >
          <Image
              style={{width:135, height: 118, marginBottom: 57}}
              source={require('../../img/logo.png')}
          />

          <TextInput style={styles.input}
            editable={true}
            value= {this.state.value}
            onChangeText={text => this.setState({value:text})}
            placeholder="Login"
            placeholderTextColor="#fff" 
          />

          <TextInput style={styles.input}
            editable={true}
            value= {this.state.value}
            onChangeText={text => this.setState({value:text})}
            placeholder="Senha"
            placeholderTextColor="#fff" 
          />

          <View style={styles.botao}>
            <Button onPress={() => this.props.navigation.navigate('IniciarCarona')}
             title = 'Entrar'
             color = '#282835'
            />
          </View>

          <View style={styles.botaoTransparente}>
            <Button 
              onPress = {() => {
                this.props.navigation.navigate('Cadastro')
              }}
              title = 'Cadastrar'
              buttonStyle={{
                backgroundColor: 'rgba(52, 52, 52, 0)'
              }}
              />

          </View>
        
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 40,
    width: 300,
    marginTop: '2%',
    marginBottom: 37,
    borderColor: '#ffffff',
  },
  pai: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: 300,
    height: 40,
    marginTop: 31,
  },
  botaoTransparente: {
    width: 300,
    height: 40,
    marginTop: 31,
    width: 340,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5
  },
});
