import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { BillStatusSvg } from '../../Globals'
import s from './Dev.styles'
import snapshots from './snapshots'

const Primary = 'House'
const Secondary = 'Senate'
const progress = [
  `Introduced in ${Primary}`,
  `${Primary} has taken action`,
  `Failed in ${Primary}`,
  `Passed in ${Primary}`,
  `Failed in ${Secondary}`,
  `Passed in ${Secondary}`,
  'Failed in cloture',
  'Passed in cloture',
  `Passed  in ${Primary} after cloture`,
  `Passed in ${Secondary} after cloture`,
  `Failed in ${Primary} after cloture`,
  `Failed in ${Secondary} after cloture`,
  `Passed in ${Primary}, failed in ${Secondary} after cloture`,
  `Passed in ${Secondary}, failed in ${Primary} after cloture`,
  `Passed both House and Senate after cloture`,
  'Vetoed',
  `Enacted`,
  `Passed override in ${Primary} after veto`,
  `Passed override in ${Secondary} after veto`,
  `Failed override in ${Primary} after veto`,
  `Failed override in ${Secondary} after veto`,
  `Passed override in ${Primary}, failed override in ${Secondary} after veto`,
  `Passed override in ${Secondary}, failed override in ${Primary} after veto`,
  `Enacted, veto overridden by Congress`
]

class Dev extends Component {
  render () {
    return (
      <ScrollView style={s.mainContainer}>
        <Text>Chamber Switch Test</Text>
        <BillStatusSvg chamber='house' progress={{ index: 5 }} status='active' />
        <BillStatusSvg chamber='senate' progress={{ index: 5 }} status='active' />
        <Text>Tabled Check</Text>
        <BillStatusSvg chamber='house' progress={{ index: 5 }} status='active' />
        <BillStatusSvg chamber='house' progress={{ index: 5 }} status='tabled' />
        {progress.map((step, i) =>
          <View key={i}>
            <Text>{`${i}: ${step}`}</Text>
            <Image source={snapshots[i]} />
            <BillStatusSvg chamber='house' status='active' progress={{ index: i }} />
          </View>
        )}
      </ScrollView>
    )
  }
}

Dev.propTypes = {
}

export default Dev
