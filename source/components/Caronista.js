import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';


  
export default class Caronista extends Component{
  render() {
    return (
        <View style={styles.pai}>
            <Image
                style={{width:118, height: 118, top: -50}}
                source={require("/root/Documentos/teste/img/logo.jpg")}
            />

            <Text
                style={{color: 'white', fontSize: 30}}
            >
                João Pedro
            </Text>       
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pai: {
        display: 'flex',
        flexDirection: 'column',
    }
});
