import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import s from './Bill.styles.scss'
import Loader from 'Globals/Loader'

class Bill extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      summary: 'loading...'
    }
  }

  componentDidMount () {
    this.props.fetchBills()
    if (this.props.urls) {
      this.setState({ loading: false })
      this.fetchBillSummary(this.props)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.urls) {
      this.setState({ loading: false })
      this.fetchBillSummary(nextProps)
    }
  }

  fetchBillSummary (props) {
    console.log('fetching bill summary')
    fetch('http://192.168.0.17:3001/api/v1/bill', {
      headers: { url: props.urls.congress }
    }).then(res => res.json())
      .then(summary => this.setState({ summary }))
      .catch(err => console.log(err))
  }

  render () {
    const { loading } = this.state

    if (this.props.billId) {
      const {
        billId,
        officialTitle,
        introducedOn,
        lastActionAt,
        chamber,
        status,
        progress,
        detailedStatus,
        sponsor,
        toggleToMyBills,
        isAdded } = this.props

      const upperId = billId.toUpperCase()
      const pDateIntroduced = moment(introducedOn).format('MMM D, YYYY')
      const pDateLastAction = moment(lastActionAt).format('MMM D, YYYY')
      const sponsorFull = `${sponsor.title}. ${sponsor.first_name} ${sponsor.last_name}`
    }

    return (
      <div className={s.mainContent}>
        {loading ? <Loader />
        : <h2>{this.props.billId}</h2>
      }
      </div>
    )
  }
}

Bill.propTypes = {
  billId: PropTypes.string,
  officialTitle: PropTypes.string,
  introducedOn: PropTypes.string,
  lastActionAt: PropTypes.string,
  chamber: PropTypes.string,
  status: PropTypes.string,
  progress: PropTypes.object,
  detailedStatus: PropTypes.string,
  sponsor: PropTypes.object,
  urls: PropTypes.object,
  toggleToMyBills: PropTypes.func,
  isAdded: PropTypes.bool,
  fetchBills: PropTypes.func
}

module.exports = Bill
