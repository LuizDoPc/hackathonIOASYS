import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import {Icon, Button} from 'react-native-elements';


export default class Pesquisa extends Component{
  state = {
    value: ""
  }
  render(){ 
    return (
      <ImageBackground
        source = {require("../../img/bgpesquisa.png")}
        style = {{width: '100%', height: '65%'}}
      >
        <View style={styles.pai}>
          <View style={styles.head}>
            <Icon
                name = 'ellipsis-v'
                color = '#fff'
                type = 'font-awesome'
            />

            <View>

            </View>

            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Text
                    style={{color: 'white', fontSize: 20}}
                >
                    Voltar
                </Text>
            </TouchableOpacity>         
          </View>
          
          <Text
            style={{color: 'white', marginBottom: 30, marginTop: 30, fontSize: 20}}
          >
            Qual o destino desejado?
          </Text>
        
          <View style={styles.inputlbl}>
            <View style={styles.lbl}>
              <Text>
                De:
              </Text>
            </View>
            <TextInput
              style={styles.input}
              editable={true}
              value= {this.state.value}
              onChangeText={text => this.setState({value:text})}
              placeholder="Nome"
              placeholderTextColor="#fff" 
            />
          </View>
          <View style={styles.inputlbl}>
            <View style={styles.lbl}>
              <Text>
                De:
              </Text>
            </View>
            <TextInput
              style={styles.input}
              editable={true}
              value= {this.state.value}
              onChangeText={text => this.setState({value:text})}
              placeholder="Nome"
              placeholderTextColor="#fff" 
            />
          </View>

          <View
            style={{
              width: 340,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <Button 
              onPress = {() => {
                alert("Vamu!")
              }}
              title = 'Vamu'
              buttonStyle={{
                backgroundColor: "rgba(52, 52, 52, 0)",
              }}
            />
          </View>
        </View>
        
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  pai: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  head: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  inputlbl: {
    display: 'flex',
    flexDirection: 'row'
  },
  lbl: {
    color: 'white',
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#000',
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 10,
    height: 40,
  },
  input: { 
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    height: 40,
    width: 300,
    borderColor: '#fff',
    backgroundColor: 'white',
    marginBottom: 20,
  },
});
