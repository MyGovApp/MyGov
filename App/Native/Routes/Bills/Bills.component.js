import React, { Component, PropTypes } from 'react'
import { View, ListView, ActivityIndicator, Text } from 'react-native'
import { styles } from './Bills.styles'
import BillCard from '../../Globals/BillCard'
import SearchInput from '../../Globals/SearchInput'

export default class Bills extends Component {
  constructor () {
    super()
    this.state = {
      searchInputHeight: 0
    }
  }

  componentDidMount () {
    const { fetchBills } = this.props
    fetchBills()
  }

  componentWillReceiveProps () {
    if (this.billsList) this.billsList.scrollTo({ y: 0 })
  }

  handleScroll = (e) => {
    let currentScroll = e.nativeEvent.contentOffset.y

    if (currentScroll < -20) {
      this.setState({ searchInputHeight: 50 })
    }
    if (currentScroll > this.state.scroll && currentScroll > 20) {
      this.setState({ searchInputHeight: 0 })
    }
    this.setState({ scroll: e.nativeEvent.contentOffset.y })
  }

  renderBillsList = ({ bills }) => {
    const billsDs = (new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows(bills)

    return (
      <View>
        <SearchInput height={this.state.searchInputHeight} />
        <Text style={styles.billCount}>
          {`${bills.length} bills match your filters`}
        </Text>
        <ListView
          ref={billsList => { this.billsList = billsList }}
          dataSource={billsDs}
          onScroll={this.handleScroll}
          scrollEventThrottle={400}
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
      <View style={styles.mainView}>
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
