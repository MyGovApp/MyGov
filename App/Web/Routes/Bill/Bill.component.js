import React, { Component, PropTypes } from 'react'
import s from './Bill.styles.scss'
import Loader from 'Globals/Loader'

class Bill extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.fetchBills()
  }

  render () {
    const { loading } = this.state

    return (
      <div className={s.mainContent}>
        {loading && (<Loader />)}
      </div>
    )
  }
}

Bill.propTypes = {
  fetchBills: PropTypes.func.isRequired
}

module.exports = Bill
