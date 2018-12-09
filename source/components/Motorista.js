import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';


  
export default class Motorista extends Component{
  render() {
    return (
        <View style={styles.pai}>
            <Image
                style={{width:160, height: 170}}
                source={require('../../img/motorista.png')}
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
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pai: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 20,
        marginTop: 20,
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
