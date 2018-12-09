import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class IniciarCarona extends Component {
  state = {
    value: ""
  };
  render() {
    return (
      <ImageBackground
        source={require("../../img/bglogin.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, .8)",
            width: "100%",
            height: "100%",
            alignItems: "center"
          }}
        >
          <View>
            <Text
              style={{
                marginTop: "25%",
                color: "#fff",
                fontSize: 28
              }}
            >
              Vamu?
            </Text>
          </View>
          <View style={{ marginTop: "6%" }}>
            <Button
              onPress={() => this.props.navigation.navigate("Home")}
              icon={<Icon name="thumbs-o-up" size={35} color="white" />}
              title="Preciso de carona"
              buttonStyle={{
                backgroundColor: "rgba(52, 52, 52, 0)",
                width: 300,
                height: 95,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 5
              }}
            />
          </View>
          <View style={{ marginTop: "6%" }}>
            <Button
              onPress={() => this.props.navigation.navigate("IniciarCarona")}
              icon={<Icon name="car" size={35} color="white" />}
              title="Dar de carona"
              buttonStyle={{
                backgroundColor: "rgba(52, 52, 52, 0)",
                width: 300,
                height: 95,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 5
              }}
            />
          </View>
        </View>
      </ImageBackground>
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
    marginTop: "2%",
    marginBottom: 37,
    borderColor: "#ffffff"
  },
  pai: {
    justifyContent: "center",
    alignItems: "center"
  },
  botao: {
    width: 300,
    height: 40,
    marginTop: 31
  },
  botaoTransparente: {
    width: 300,
    height: 40,
    marginTop: 31
  }
});
