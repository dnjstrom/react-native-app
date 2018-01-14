/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Children } from "react"
import { Platform, StyleSheet, Text, View, Image, Button, Alert } from "react-native"
import head from "./images/head.gif"
import octo from "./images/octo.gif"

const getRandomInt = max => Math.floor(Math.random() * max)

const chooseOneAtRandom = xs => xs[getRandomInt(xs.length)]

const Random = ({ children }) => <View>{chooseOneAtRandom(Children.toArray(children))}</View>

const clickResponses = ["Yeah!", "Alright!", "Whoo hoo!", "Sooo excited!!"]

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Random>
          <Image
            source={head}
            style={{
              width: 300,
              height: 200
            }}
          />
          <Image
            source={octo}
            style={{
              width: 300,
              height: 200
            }}
          />
        </Random>
        <Text style={{ marginTop: 20 }}>Coming soon!</Text>
        <Button
          title="Yay!"
          onPress={() => {
            Alert.alert(chooseOneAtRandom(clickResponses))
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
})
