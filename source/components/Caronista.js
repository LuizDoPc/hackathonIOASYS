import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';


  
export default class Caronista extends Component{
  render() {
    return (
        <View style={styles.pai}>
            <Image
                style={{width:160, height: 118}}
                source={require('../../img/logo.png')}
            />

            <View
                style={styles.bg}
            >
                <Text
                    style={{color: 'white', fontSize: 30}}
                >
                    IR JUNTO
                </Text>   
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Ir para proxima tela</Text>
            </TouchableOpacity>    
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pai: {
        display: 'flex',
        flexDirection: 'column',
    },
    bg: {
        backgroundColor : "#282835",
        padding: 10,
        width: 160,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
    },
});
