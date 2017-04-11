import React, { Component, PropTypes } from 'react'

class Bills extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    this.props.fetchBills()
  }

  render () {
    const { renderPage } = this.props
    const shortBills = this.props.bills.slice(0, 50 * renderPage)
    return (
      <div>
        <h2>Bills Route</h2>
        {shortBills.map((bill, i) => (<p key={i}>{i} | {bill.officialTitle}</p>))}
      </div>
    )
  }
}

Bills.propTypes = {
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired,
  renderPage: PropTypes.number.isRequired
}

module.exports = Bills
