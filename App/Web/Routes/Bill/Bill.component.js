import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import s from './Bill.styles.scss'
import Loader from 'Globals/Loader'
import LabelValue from 'Globals/LabelValue'
import BillStatusSvg from 'Globals/BillStatusSvg'

class Bill extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      summary: '<p>loading...</p>'
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
      .then(summary => this.setState({ summary: summary.summaryHtml }))
      .catch(err => console.log(err))
  }

  render () {
    const { loading, summary } = this.state
    console.log('summary :  : ', summary)
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

    return (
      <div className={s.mainContent}>
        {loading ? <Loader />
        : <div>
          <div className={s.summaryContainer}>
            <h3 className={s.sectionTitle}>{upperId}</h3>
            <h2>{officialTitle}</h2>
            <LabelValue label='Introduced: ' value={pDateIntroduced} />
            <LabelValue label='Sponsor: ' value={sponsorFull} />
            <LabelValue label='Chamber: ' value={chamber} />
          </div>
          <div className={s.summaryContainer}>
            <h3 className={s.sectionTitle}>Bill Progress</h3>
            <LabelValue label='Status: ' value={status} />
            <LabelValue label='Detailed Status: ' value={detailedStatus} />
            <LabelValue label='Progress: ' value={progress.text} />
            <LabelValue label='Last Action On: ' value={pDateLastAction} />
            <BillStatusSvg {...{ progress, chamber, status }} />
          </div>
          <div className={s.summaryContainer}>
            <h3 className={s.sectionTitle}>Bill Summary</h3>
            <div className={s.billSummary} dangerouslySetInnerHTML={{ __html: summary }} />
          </div>
        </div>
      }
      </div>
    )
  }
}

Bill.defaultProps = {
  billId: '',
  officialTitle: '',
  introducedOn: '',
  lastActionAt: '',
  chamber: '',
  status: '',
  progress: {},
  detailedStatus: '',
  sponsor: {},
  isAdded: false
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
