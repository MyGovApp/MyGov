import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import classes from './IconButton.styles.js'
import { Actions as NavigationActions } from 'react-native-router-flux'

console.log('NavigationActions', NavigationActions)

const IconButton = ({ route, text, image }) => {
  return (
    <TouchableHighlight
      style={classes.touchableHighlight}
      onPress={NavigationActions[route]}
    >
      <View style={classes.navItem}>
        <Image
          source={image}
        />
        <Text
          style={classes.text}
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
