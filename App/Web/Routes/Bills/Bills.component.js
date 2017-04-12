import React, { Component, PropTypes } from 'react'
import BillCard from 'Globals/BillCard'
import Loader from 'Globals/Loader'
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
    const { renderPage, loading } = this.props
    const shortBills = this.props.bills.slice(0, 50 * renderPage)
    return (
      <div className={s.mainContent}>
        {loading ? <Loader containerStyles={{ marginTop: '200px' }} />
        : shortBills.map((bill, i) => (<BillCard key={i} {...bill} />))
        }
      </div>
    )
  }
}

Bills.propTypes = {
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired,
  renderPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

module.exports = Bills
