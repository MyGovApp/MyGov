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
      bill_id,
      official_title,
      introduced_on,
      last_action_at,
      chamber,
      status,
      progress } = this.props

    const { showFullTitle } = this.state

    const truncTitle = truncate(official_title, { length: 65, separator: /,? +/ })
    const upperId = upperCase(bill_id)
    const pDateIntroduced = moment(introduced_on).format('MMM D, YYYY')
    const pDateLastAction = moment(last_action_at).format('MMM D, YYYY')

    return (
      <View style={s.container}>
        <TouchableOpacity
          onPress={() => this.setState({ showFullTitle: !showFullTitle })}
        >
          <LabelValue
            name='title'
            value={showFullTitle ? official_title : truncTitle}
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
  bill_id: PropTypes.string.isRequired,
  official_title: PropTypes.string.isRequired,
  introduced_on: PropTypes.string.isRequired,
  last_action_at: PropTypes.string.isRequired,
  chamber: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired
}

export default BillCard
