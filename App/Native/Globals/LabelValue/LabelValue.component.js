import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import styles from './LabelValue.styles'

class LabelValue extends Component {
  render () {
    const { name, label, value, style } = this.props
    return (
      <Text style={[ styles[name], styles.textCommon, style ]}>
        {label && (<Text style={styles.boldSpan}>{label}</Text>)}
        {value}
      </Text>
    )
  }
}

LabelValue.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default LabelValue
