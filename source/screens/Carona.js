import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import NavText from '/root/Documentos/hackathonIOASYS/source/components/NavText.js';
import Caronista from '/root/Documentos/hackathonIOASYS/source/components/Caronista.js';
  
export default class Carona extends Component{
  state = {
    value: ""
  }
  render() {
    return (
        <View
          style={styles.pai}
        > 
            <NavText 
                meio = "Cadastro"
                direita = "Voltar"
            />
            
            <View
                style={{width: '100%', 
                height: '100%', 
                justifyContent: 'center', 
                alignItems: 'center'}}
            >
                <Text>
                    Pessoas que passarão por esse ponto,
                    escolha uma.
                </Text>
            
            </View>

            <View
            
            >


            </View>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 40,
    width: 300,
    marginTop: '2%',
    marginBottom: 37,
    borderColor: '#000',
  },
  pai: {
    backgroundColor: 'rgba(255, 255, 255, 1)', 
    width: '100%', 
    height: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'column'
  },
  botao: {
    width: 300,
    height: 40,
    marginTop: 31,
  },
});
