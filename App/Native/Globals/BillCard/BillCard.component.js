import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, Text, Separator, Image } from 'react-native'
import { truncate, upperCase } from 'lodash'
import moment from 'moment'
import styles from './BillCard.styles'

class BillCard extends Component {
  LabelValue ({ name, label, value }) {
    return (
      <Text style={[ styles[name], styles.textCommon ]}>
        {label && (<Text style={styles.boldSpan}>{label}</Text>)}
        {value}
      </Text>
    )
  }

  render () {
    const LabelValue = this.LabelValue
    const { bill_id, official_title, introduced_on, last_action_at, chamber, sponsor, status, progress, detailedStatus, urls } = this.props

    const truncTitle = truncate(official_title, { length: 80, separator: /,? +/ })
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
      </View>
    )
  }
}

BillCard.propTypes = {}

export default BillCard
