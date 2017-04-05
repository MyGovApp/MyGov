import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import s from './IconButton.styles.js'
import { Actions as NavigationActions } from 'react-native-router-flux'

const IconButton = ({ route, text, image }) => {
  return (
    <TouchableHighlight
      style={s.touchableHighlight}
      onPress={NavigationActions[route]}
    >
      <View style={s.navItem}>
        <Image
          source={image}
          style={{ height: 25, width: 25, padding: 5 }}
        />
        <Text
          style={s.text}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

IconButton.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired
}

module.exports = IconButton
