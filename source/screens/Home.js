import React, {Component} from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';

import Pesquisa from '../components/Pesquisa';
  
export default class Carona extends Component{
  
  render() {
    return (
        <View>
            <Pesquisa/>

            <View
                style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', }}
            >
                <Text
                    style={{top: -130}}
                >
                    Voce pode escolher entre essas maneiras:
                </Text>

                <View
                    style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly'}}
                >
                    <Image
                        style={{width:118, height: 118, marginLeft: 20}}
                        source={require("../../img/carona.png")}
                    />
                    <Image
                        style={{width:118, height: 118, marginLeft: 20}}
                        source={require("../../img/eventos.png")}
                    />
                    <Image
                        style={{width:118, height: 118, marginLeft: 20}}
                        source={require("../../img/onibus.png")}
                    />
                    <Image
                        style={{width:118, height: 118, marginLeft: 20}}
                        source={require("../../img/taxi.png")}
                    />
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
