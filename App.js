import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Pesquisa from '/root/Documentos/hackathonIOASYS/source/components/Pesquisa.js';


export default class App extends Component{
  render() {
    return (
        
      <View style={styles.container}>
        <Pesquisa/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
