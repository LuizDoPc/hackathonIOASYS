import React, {Component} from 'react';
import {View, StyleSheet, Text,} from 'react-native';
import {Icon} from 'react-native-elements';


  
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

            <Text
                sytle={{color: 'white', fontSize: 30}}
            >
                {this.props.direita}
            </Text>        
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
        justifyContent: 'space-between'
    }
});
