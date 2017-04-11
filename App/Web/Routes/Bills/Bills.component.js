import React, { Component, PropTypes } from 'react'

class Bills extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    console.log('ping')
    this.props.fetchBills()
  }

  render () {
    return (
      <div>
        <h2>Bills Route</h2>
        {this.props.bills.map((bill, i) => (<p key={i}>{bill.officialTitle}</p>))}
      </div>
    )
  }
}

Bills.propTypes = {
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired
}

module.exports = Bills
