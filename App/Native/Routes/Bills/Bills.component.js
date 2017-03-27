import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { classes } from './Bills.styles'

export default class Bills extends Component {
  constructor () {
    super()
    this.state = {
      bills: []
    }
  }

  componentDidMount () {
    const { fetchBills } = this.props
    fetchBills()
  }

  render () {
    const { toggleColor, color, bills } = this.props
    console.log(bills)

    return (
      <View style={classes.mainView}>
        <Text
          onPress={toggleColor}
          style={[classes.helloWorld, { color }]}>
          Bills!
          {bills[0] && bills[0].official_title}
        </Text>
      </View>
    )
  }
}

Bills.propTypes = {
  color: PropTypes.string.isRequired,
  toggleColor: PropTypes.func.isRequired,
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired
}
