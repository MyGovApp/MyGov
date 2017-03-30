import React, { Component, PropTypes } from 'react'
import { View, ListView, ActivityIndicator } from 'react-native'
import { classes } from './Bills.styles'
import BillCard from '../../Globals/BillCard'

export default class Bills extends Component {
  componentDidMount () {
    const { fetchBills } = this.props
    fetchBills()
  }

  renderBillsList ({ bills }) {
    const billsDs = (new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows(bills)
    return (
      <View style={classes.contentContainer}>
        <ListView
          dataSource={billsDs}
          renderRow={(bill) => (
            <BillCard
              {...bill}
              key={bill.bill_id}
            />
          )}
        />
      </View>
    )
  }

  render () {
    const { bills, loading } = this.props
    const BillsList = this.renderBillsList

    return (
      <View style={classes.mainView}>
        {loading
          ? <ActivityIndicator />
          : Boolean(bills.length) && (<BillsList bills={bills} />)
        }
      </View>
    )
  }
}

Bills.propTypes = {
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
