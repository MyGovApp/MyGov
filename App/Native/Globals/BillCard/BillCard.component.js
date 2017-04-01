import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { truncate, upperCase } from 'lodash'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { images } from '../../Themes'
import moment from 'moment'
import styles from './BillCard.styles'
import BillStatusSvg from '../BillStatusSvg'

class BillCard extends Component {
  renderLabelValue ({ name, label, value }) {
    return (
      <Text style={[ styles[name], styles.textCommon ]}>
        {label && (<Text style={styles.boldSpan}>{label}</Text>)}
        {value}
      </Text>
    )
  }

  render () {
    const LabelValue = this.renderLabelValue

    const {
      bill_id,
      official_title,
      introduced_on,
      last_action_at,
      chamber,
      status,
      progress,
      detailedStatus } = this.props

    const truncTitle = truncate(official_title, { length: 70, separator: /,? +/ })
    const upperId = upperCase(bill_id)
    const pDateIntroduced = moment(introduced_on).format('MMM D, YYYY')
    const pDateLastAction = moment(last_action_at).format('MMM D, YYYY')

    return (
      <View style={styles.container}>
        <LabelValue
          name='title'
          value={truncTitle}
        />
        <LabelValue
          name='id'
          value={upperId}
        />
        <LabelValue
          name='dateIntroduced'
          label='Date Introduced: '
          value={pDateIntroduced}
        />
        <LabelValue
          name='lastAction'
          label='Last Action: '
          value={pDateLastAction}
        />
        <LabelValue
          name='status'
          label='Status: '
          value={status}
        />
        <LabelValue
          name='progress'
          label='Progress: '
          value={progress.text}
        />
        <LabelValue
          name='detailedStatus'
          label='Detailed Status: '
          value={detailedStatus}
        />
        <BillStatusSvg {...{ status, progress, chamber }} />
        <TouchableOpacity style={styles.buttonBorder} onPress={() => NavigationActions.bill()}>
          <Image source={images.billDetailIcon} style={{ height: 30, width: 30 }} />
          <Text style={styles.billDetials}>Bill Details</Text>
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
  progress: PropTypes.object.isRequired,
  detailedStatus: PropTypes.string.isRequired
}

export default BillCard
