import React, { Component, PropTypes } from 'react'
import BillCard from 'Globals/BillCard'
import Loader from 'Globals/Loader'
import s from './Bills.styels.scss'
import SearchInput from '../../Globals/SearchInput'

class Bills extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    this.props.fetchBills()
  }

  renderBillsList = ({ bills }) => (
    <div>
      {bills.map((bill, i) => (<BillCard key={i} {...bill} />))}
    </div>
  )

  render () {
    const { renderPage, loading, bills } = this.props
    const shortBills = bills.slice(0, 50 * renderPage)

    const BillsList = this.renderBillsList

    return (
      <div className={s.mainContent}>
        {loading ? <Loader />
        : <div>
          <SearchInput />
          <p className={s.billsCount}>{`${bills.length} bills match your filters`}</p>
          <BillsList bills={shortBills} />
        </div>
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
