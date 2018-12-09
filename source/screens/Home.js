import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Pesquisa from '../components/Pesquisa';
  
export default class Carona extends Component{
  
  render() {
    return (
        <View>
            <Pesquisa
                navigation = {this.props.navigation}
            />

            <View
                style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', }}
            >
                <Text
                    style={{top: -130, fontSize: 20}}
                >
                    Voce pode escolher entre essas maneiras:
                </Text>

                <View
                    style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'space-evenly', top: -50}}
                >
                    <View
                        style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}
                    >

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Carona')}>
                            <Image
                                style={{width:124, height: 118, marginRight: 20}}
                                source={require("../../img/carona.png")}
                            />
                        </TouchableOpacity>       
                        
                        <Image
                            style={{width:124, height: 118}}
                            source={require("../../img/eventos.png")}
                        />
                    </View>
                    <View
                        style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly'}}
                    >
                        <Image
                            style={{width:124, height: 118, marginRight: 20}}
                            source={require("../../img/onibus.png")}
                        />
                        <Image
                            style={{width:124, height: 118}}
                            source={require("../../img/taxi.png")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
