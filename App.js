import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Caronista from './source/components/Caronista';


export default class App extends Component{
  render() {
    return (
        
      <View style={styles.container}>
        <Caronista/>
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
