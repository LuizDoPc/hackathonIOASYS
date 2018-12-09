import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import NavText from '../components/NavText';
import Motorista from '../components/Motorista';
  
export default class Carona extends Component{
  render() {
    return (
        <View
          style={styles.pai}
        > 
            <NavText 
                meio = "Caronas"
                navigation = {this.props.navigation}
            />

            <Text
                style={{fontSize: 20}}
            >
                Pessoas que passarão por esse ponto,
                escolha uma.
            </Text>
            
            <View
                style={{display: 'flex', flexDirection: 'column', marginTop: 20}}
            >
                <Text>
                    Favoritas
                </Text>
                <View
                    style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}
                >

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity>    
                    
                </View>
            </View>

            <View
                style={{display: 'flex', flexDirection: 'column', marginTop: 50}}
            >
                <Text
                    style={{marginLeft: 20}}
                >
                    Top 5 Lavras
                </Text>
                <View
                    style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}
                >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
                    <Motorista/>
                </TouchableOpacity> 

                </View>
            </View>

            
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
