import React, { Component, PropTypes } from 'react'
import { Text, View, ScrollView } from 'react-native'
import moment from 'moment'
import { capitalize } from 'lodash'
import styles from './Bill.styles'
import LabelValue from '../../Globals/LabelValue'
import BillStatusSvg from '../../Globals/BillStatusSvg'

class Bill extends Component {
  render () {
    console.log('this.props : ', this.props)
    const {
      bill_id,
      official_title,
      introduced_on,
      last_action_at,
      chamber,
      status,
      progress,
      detailedStatus,
      sponsor } = this.props

    const upperId = bill_id.toUpperCase()
    const pDateIntroduced = moment(introduced_on).format('MMM D, YYYY')
    const pDateLastAction = moment(last_action_at).format('MMM D, YYYY')
    const sponsorFull = `${sponsor.title}. ${sponsor.first_name} ${sponsor.last_name}`

    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.summaryContainer}>
          <Text style={styles.id}>{upperId}</Text>
          <Text style={styles.title}>{official_title}</Text>
          <LabelValue
            name='dateIntroduced'
            label='Introduced: '
            value={pDateIntroduced}
          />
          <LabelValue
            name='sponsor'
            label='Sponsor: '
            value={sponsorFull}
            style={{ paddingTop: 5 }}
          />
          <LabelValue
            name='chamber'
            label='Chamber: '
            value={capitalize(chamber)}
            style={{ paddingTop: 5, paddingBottom: 15 }}
          />
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.id}>Bill Progress</Text>
          <LabelValue
            name='status'
            label='Status: '
            value={capitalize(status)}
            style={{ paddingTop: 20 }}
          />
          <LabelValue
            name='detailedStatus'
            label='Detailed Status: '
            value={detailedStatus}
            style={{ paddingTop: 5 }}
          />
          <LabelValue
            name='progress'
            label='Progress: '
            value={progress.text}
            style={{ paddingTop: 5 }}
          />
          <LabelValue
            name='lastAction'
            label='Last Action At: '
            value={pDateLastAction}
            style={{ paddingTop: 5, paddingBottom: 10 }}
          />
          <BillStatusSvg {...{ status, progress, chamber }} />
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.id}>Bill Summary</Text>
        </View>
      </ScrollView>
    )
  }
}

Bill.propTypes = {
  bill_id: PropTypes.string.isRequired,
  official_title: PropTypes.string.isRequired,
  introduced_on: PropTypes.string.isRequired,
  last_action_at: PropTypes.string.isRequired,
  chamber: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  detailedStatus: PropTypes.string.isRequired,
  sponsor: PropTypes.object.isRequired
}

export default Bill
