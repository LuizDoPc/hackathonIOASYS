import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Pesquisa from "../components/Pesquisa";

export default class Carona extends Component {
  render() {
    return (
      <ScrollView>
        <Pesquisa navigation={this.props.navigation} />
        <View>
          <Text
            style={{
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 15,
              marginBottom: 15
            }}
          >
            Voce pode escolher entre essas maneiras:
          </Text>

          <View
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: 20
              }}
            >
              <TouchableOpacity
                style={{ width: "33%", aspectRatio: 1 }}
                onPress={() => this.props.navigation.navigate("Carona")}
              >
                <Image
                  source={require("../../img/carona.png")}
                  style={{ flex: 1, aspectRatio: 1 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width: "33%", aspectRatio: 1 }}
                onPress={() => this.props.navigation.navigate("Carona")}
              >
                <Image
                  style={{ flex: 1, aspectRatio: 1 }}
                  source={require("../../img/eventos.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Image
                style={{ width: "33%", aspectRatio: 1, marginRight: 20 }}
                source={require("../../img/onibus.png")}
              />
              <Image
                style={{ width: "33%", aspectRatio: 1 }}
                source={require("../../img/taxi.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
