import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './DrawerButton.styles'

class DrawerButton extends Component {
  render () {
    const indexContainer = this.props.isIndex ? styles.indexContainer : {}
    const indexText = this.props.isIndex ? styles.indexText : {}
    const indexBorder = this.props.isIndex ? styles.indexBorder : {}
    const { leftIcon, rightIcon } = this.props
    const leftIconContainer = leftIcon && !rightIcon ? styles.leftIconContainer : {}

    return (
      <View style={[ styles.borderContainer, indexBorder ]}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[ styles.container, indexContainer, leftIconContainer ]}
        >
          {leftIcon && (<Image source={leftIcon} style={styles.icon} />)}
          <Text style={[ styles.text, indexText ]}>{this.props.text}</Text>
          {rightIcon && (<Image source={rightIcon} style={styles.icon} />)}
        </TouchableOpacity>
      </View>
    )
  }
}

DrawerButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  leftIcon: PropTypes.number,
  rightIcon: PropTypes.number,
  isIndex: PropTypes.bool
}

export default DrawerButton
