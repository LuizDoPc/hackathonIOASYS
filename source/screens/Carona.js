import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import NavText from '../components/NavText';
import Ponto from '../components/Ponto';
  
export default class Carona extends Component{
  render() {
    return (
        <View
          style={styles.pai}
        > 
            <NavText 
                meio = ""
                navigation = {this.props.navigation}
            />
            
            <Text
              style={{margin: 50}}
            >
              Escolha o ponto de carona
            </Text>

          
            <Ponto/>
            <Ponto/>
            <Ponto/>
            <Ponto/>
            <Ponto/>
            <Ponto/>
            <Ponto/>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  pai: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    flexDirection: 'column',
  },
});
