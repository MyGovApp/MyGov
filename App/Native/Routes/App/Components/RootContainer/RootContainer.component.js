import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../../../../Navigation/NavigationRouter'
import s from './RootContainer.styles'

class RootContainer extends Component {
  render () {
    return (
      <View style={s.applicationView}>
        <StatusBar style={{ marginTop: 70 }} barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

export default RootContainer
