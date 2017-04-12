import React, { Component, PropTypes } from 'react'
import BillCard from 'Globals/BillCard'
import s from './Bills.styels.scss'

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
      <div className={s.mainContent}>
        {shortBills.map((bill, i) => (<BillCard key={i} {...bill} />))}
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
