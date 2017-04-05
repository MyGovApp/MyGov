import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput } from 'react-native'
import s from './SearchInput.styles'

class SearchInput extends Component {
  render () {
    const showHide = {
      marginTop: this.props.height / 2,
      marginBottom: this.props.height / 2
    }

    if (this.props.height === 0) return null

    return (
      <View style={[ s.searchContainer, showHide ]}>
        <Text style={s.searchText}>Search</Text>
        <TextInput
          value={this.props.search}
          style={s.input}
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
  searchBills: PropTypes.func.isRequired,
  search: PropTypes.string
}

export default SearchInput
