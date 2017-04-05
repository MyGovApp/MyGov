import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import s from './Button.styles'

class Button extends Component {
  render () {
    const { text, onPress, textStyle, buttonStyle } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[ s.default.container, buttonStyle ]}
      >
        <Text
          style={[ s.default.text, textStyle ]}
        >{text}</Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  buttonStyle: PropTypes.object
}

export default Button
