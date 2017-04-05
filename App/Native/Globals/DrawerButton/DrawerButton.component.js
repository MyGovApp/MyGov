import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import s from './DrawerButton.styles'

class DrawerButton extends Component {
  setup () {
    const { leftIcon, rightIcon } = this.props

    return {
      indexContainer: this.props.isIndex ? s.indexContainer : {},
      indexText: this.props.isIndex ? s.indexText : {},
      indexBorder: this.props.isIndex ? s.indexBorder : {},
      leftIconContainer: leftIcon && !rightIcon ? s.leftIconContainer : {},
      leftIcon,
      rightIcon
    }
  }

  render () {
    const { indexContainer, indexText, indexBorder, leftIcon, rightIcon, leftIconContainer } = this.setup()

    return (
      <View style={[ s.borderContainer, indexBorder ]}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[ s.container, indexContainer, leftIconContainer ]}
        >
          <View style={s.leftGroup}>
            {leftIcon && (<Image source={leftIcon} style={s.iconLeft} />)}
            <Text style={[ s.text, indexText ]}>{this.props.text}</Text>
          </View>
          {rightIcon && (<Image source={rightIcon} style={s.iconRight} />)}
        </TouchableOpacity>
      </View>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  isIndex: PropTypes.bool
}

export default DrawerButton
