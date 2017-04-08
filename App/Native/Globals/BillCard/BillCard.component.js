import moment from 'moment'
import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { truncate, upperCase, capitalize } from 'lodash'
import { Actions as NavigationActions } from 'react-native-router-flux'

import s from './BillCard.styles'
import BillStatusSvg from '../BillStatusSvg'
import LabelValue from '../LabelValue'
import { images as I } from '../../Themes'

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

    const truncTitle = truncate(officialTitle, { length: 65, separator: /,? +/ })
    const upperId = upperCase(billId)
    const pDateIntroduced = moment(introducedOn).format('MMM D, YYYY')
    const pDateLastAction = moment(lastActionAt).format('MMM D, YYYY')

    return (
      <View style={s.container}>
        <TouchableOpacity
          onPress={() => this.setState({ showFullTitle: !showFullTitle })}
        >
          <LabelValue
            name='title'
            value={showFullTitle ? officialTitle : truncTitle}
          />
        </TouchableOpacity>
        <LabelValue
          name='id'
          value={upperId}
        />
        <LabelValue
          name='status'
          label='Status: '
          value={capitalize(status)}
        />
        <LabelValue
          name='dateIntroduced'
          label='Date Introduced: '
          value={pDateIntroduced}
          style={{ paddingTop: 5 }}
        />
        <LabelValue
          name='lastAction'
          label='Last Action: '
          value={pDateLastAction}
          style={{ paddingTop: 5 }}
        />
        <BillStatusSvg {...{ status, progress, chamber }} />
        <TouchableOpacity
          style={s.buttonBorder}
          onPress={() => NavigationActions.bill({ ...this.props })}
        >
          <Image source={I.billDetailIcon} style={{ height: 30, width: 30 }} />
          <Text style={s.billDetials}>Bill Details</Text>
        </TouchableOpacity>
      </View>
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

export default BillCard
