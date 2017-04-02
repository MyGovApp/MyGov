const React = require('react')
const ReactNative = require('react-native')
const {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = ReactNative

class ExternalLink extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
    text: React.PropTypes.string,
    style: React.PropTypes.object
  }

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
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  button: {
    padding: 10
  },
  text: {
    color: '#3B5998',
    textDecorationLine: 'underline'
  }
})

export default ExternalLink
