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
          <View style={styles.leftGroup}>
            {leftIcon && (<Image source={leftIcon} style={styles.iconLeft} />)}
            <Text style={[ styles.text, indexText ]}>{this.props.text}</Text>
          </View>
          {rightIcon && (<Image source={rightIcon} style={styles.iconRight} />)}
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
