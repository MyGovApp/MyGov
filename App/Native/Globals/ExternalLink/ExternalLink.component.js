import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import s from './ExternalLink.styles'

class ExternalLink extends React.Component {
  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url)
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url)
      }
    })
  }

  render () {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={this.handleClick}>
        <View style={s.button}>
          <Text style={s.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

ExternalLink.propTypes = {
  url: React.PropTypes.string,
  text: React.PropTypes.string,
  style: React.PropTypes.object
}

export default ExternalLink
