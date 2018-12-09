import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text,} from 'react-native';
import {Icon} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

  
export default class NavText extends Component{
  render() {
    return (
        <View style={styles.pai}>
            <Icon
                name = 'ellipsis-v'
                color = '#fff'
                type = 'font-awesome'
            />

            <Text
                style={{color: 'white', fontSize: 30}}
            >
                {this.props.meio}
            </Text>

            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Text
                    style={{color: 'white', fontSize: 20}}
                >
                    Voltar
                </Text>
            </TouchableOpacity>        
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pai: {
        backgroundColor: '#282835', 
        width: '100%',
        height: '6%',
        justifyContent: 'center', 
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
});
