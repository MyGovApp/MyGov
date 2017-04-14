import { connect } from 'react-redux'
import { fetchBills } from '../../../Actions/webActions'
import Bill from './Bill.component.js'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  ...state.bills.bills.find(bill => bill.billId === ownProps.params.bill)
})

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
