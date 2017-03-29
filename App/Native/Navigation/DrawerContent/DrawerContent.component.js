import React, { Component } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import styles from './DrawerContent.styles'
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

  route = (route) => {
    this.toggleDrawer()
    NavigationActions[route]()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Bills' onPress={() => this.route('bills')} />
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
