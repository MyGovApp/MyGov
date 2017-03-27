import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { classes } from './Bills.styles'

export default class Bills extends Component {
  render () {
    const { toggleColor, color } = this.props

    return (
      <View style={classes.mainView}>
        <Text
          onPress={toggleColor}
          style={[classes.helloWorld, { color }]}>
          Bills!
        </Text>
      </View>
    )
  }
}

Bills.propTypes = {
  color: PropTypes.string.isRequired,
  toggleColor: PropTypes.func.isRequired
}
