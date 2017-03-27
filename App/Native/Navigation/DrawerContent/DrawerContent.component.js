// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './DrawerContent.styles'
import { images } from '../../Themes'
import DrawerButton from '../../Globals/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  routeHelloWorld = () => {
    this.toggleDrawer()
    NavigationActions.helloWorld()
  }

  routeHelloWorldAsync = () => {
    this.toggleDrawer()
    NavigationActions.HelloWorldAsync()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <DrawerButton text='Hello World' onPress={this.routeHelloWorld} />
        <DrawerButton text='Hello World Async' onPress={this.routeHelloWorldAsync} />
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
