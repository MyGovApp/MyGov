import React, { Component, PropTypes } from 'react'
import s from './SearchInput.styles.scss'

class SearchInput extends Component {
  constructor () {
    super()
    this.state = {
      searchText: ''
    }
  }

  handleChange = (e) => {
    this.props.searchBills(e.target.value)
    this.setState({ searchText: e.target.value })
  }

  render () {
    return (
      <input
        type='text'
        placeholder='Search'
        value={this.state.searchText}
        onChange={this.handleChange}
        className={s.input}
      />
    )
  }
}

SearchInput.propTypes = {
}

module.exports = SearchInput
