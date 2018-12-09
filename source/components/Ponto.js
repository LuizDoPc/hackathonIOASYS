import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';


  
export default class Motorista extends Component{
  render() {
    return (
        <View style={styles.pai}>
            <Icon
                name = 'location'
                color = '#000'
                type = 'evilicon'
                size = {50}
            />

            <View
            >
                <Text>
                    Ponto
                </Text>

                <Text>
                    Endereço:
                </Text>
                
                <Text>
                    Rua chagas doria
                </Text>
        
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pai: {
        width: '80%',
        height: '10%',
        borderWidth: 1,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    }
});
