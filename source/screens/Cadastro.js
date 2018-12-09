import React, {Component} from 'react';
import {Image, View, TextInput, StyleSheet, Button, BackHandler } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavText from '../components/NavText.js';



  
export default class Cadastro extends Component{
  state = {
    value: ""
  }
  render() {
    return (
        <View
          style={styles.pai}
        > 
          <NavText 
            meio = "Cadastro"
            navigation = {this.props.navigation}
          />
          
          <View
            style={{width: '100%', 
            height: '100%', 
            justifyContent: 'center', 
            alignItems: 'center'}}
          >
            <Image
                style={{width:135, height: 118, top: -50}}
                source={require("../../img/logo.png")}
            />

            <TextInput style={styles.input}
                editable={true}
                value= {this.state.value}
                onChangeText={text => this.setState({value:text})}
                placeholder="Nome"
                placeholderTextColor="#000" 
            />

            <TextInput style={styles.input}
                editable={true}
                value= {this.state.value}
                onChangeText={text => this.setState({value:text})}
                placeholder="Email"
                placeholderTextColor="#000" 
            />
            <TextInput style={styles.input}
                editable={true}
                value= {this.state.value}
                onChangeText={text => this.setState({value:text})}
                placeholder="Telefone"
                placeholderTextColor="#000" 
            />

            <TextInput style={styles.input}
                editable={true}
                value= {this.state.value}
                onChangeText={text => this.setState({value:text})}
                placeholder="Senha"
                placeholderTextColor="#000" 
            />
            <View style={styles.botao}>
                <Button 
                onPress = {() => {
                    this.props.navigation.navigate('IniciarCarona');
                }}
                title = 'Entrar'
                color = "#282835"
                />
            </View>
          </View>
          
        </View>
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
    borderColor: '#000',
  },
  pai: {
    backgroundColor: 'rgba(255, 255, 255, 1)', 
    width: '100%', 
    height: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'column'
  },
  botao: {
    width: 300,
    height: 40,
    marginTop: 31,
  },
});
