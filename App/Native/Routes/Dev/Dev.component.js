import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import s from './Dev.styles'

class Dev extends Component {
  render () {
    return (
      <View style={s.mainContainer}>
        <Text>Dev Route</Text>
      </View>
    )
  }
}

Dev.propTypes = {
}

export default Dev
