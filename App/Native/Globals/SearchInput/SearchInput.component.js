import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './SearchInput.styles'

class SearchInput extends Component {
  render () {
    const showHide = {
      marginTop: this.props.height / 2,
      marginBottom: this.props.height / 2
    }

    if (this.props.height === 0) return null

    return (
      <View style={[ styles.searchContainer, showHide ]}>
        <Text style={styles.searchText}>Search</Text>
        <TextInput
          value={this.props.search}
          style={styles.input}
          placeholder='Search'
          clearButtonMode='always'
          onChangeText={(text) => this.props.searchBills(text)}
        />
      </View>
    )
  }
}

SearchInput.propTypes = {
  height: PropTypes.number.isRequired,
  searchBills: PropTypes.func.isRequired
}

export default SearchInput
