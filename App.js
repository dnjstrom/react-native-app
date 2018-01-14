/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Children } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from "react-native"

import head from "./images/head.gif"
import octo from "./images/octo.gif"

const getRandomInt = max => Math.floor(Math.random() * max)

const chooseOneAtRandom = xs => xs[getRandomInt(xs.length)]

class Random extends React.PureComponent {
  state = {
    choice: 0
  }

  choose = () =>
    this.setState({
      choice: getRandomInt(Children.count(this.props.children))
    })

  chooseNext = () =>
    this.setState(state => ({
      choice: (state.choice + 1) % Children.count(this.props.children)
    }))

  componentDidMount = this.choose

  render() {
    return (
      <TouchableOpacity onPress={this.chooseNext}>
        {Children.toArray(this.props.children)[this.state.choice]}
      </TouchableOpacity>
    )
  }
}

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
