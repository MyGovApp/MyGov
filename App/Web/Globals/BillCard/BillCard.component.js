import React, { Component, PropTypes } from 'react'
import { truncate, upperCase, capitalize } from 'lodash'
import moment from 'moment'
import s from './BillCard.styles.scss'
import LabelValue from '../../Globals/LabelValue'
import BillStatusSvg from 'Globals/BillStatusSvg'

class BillCard extends Component {
  constructor () {
    super()
    this.state = {
      showFullTitle: false
    }
  }

  render () {
    const {
      billId,
      officialTitle,
      introducedOn,
      lastActionAt,
      chamber,
      status,
      progress } = this.props

    const { showFullTitle } = this.state

    const truncTitle = truncate(officialTitle, { length: 70, separator: /,? +/ })
    const upperId = upperCase(billId)
    const pDateIntroduced = moment(introducedOn).format('MMM D, YYYY')
    const pDateLastAction = moment(lastActionAt).format('MMM D, YYYY')

    return (
      <div className={s.container}>
        <h2
          onClick={() => this.setState({ showFullTitle: !showFullTitle })}
          className={s.title}
        >
          {showFullTitle ? officialTitle : truncTitle}
        </h2>
        <h3 className={s.billId}>{upperId}</h3>
        <LabelValue label='Status: ' value={capitalize(status)} />
        <LabelValue label='Date Introduced: ' value={pDateIntroduced} />
        <LabelValue label='Last Action: ' value={pDateLastAction} />
        <BillStatusSvg {...{ status, progress, chamber }} scale={0.95} />
      </div>
    )
  }
}

BillCard.propTypes = {
  billId: PropTypes.string.isRequired,
  officialTitle: PropTypes.string.isRequired,
  introducedOn: PropTypes.string.isRequired,
  lastActionAt: PropTypes.string.isRequired,
  chamber: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired
}

module.exports = BillCard
