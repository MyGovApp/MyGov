import { connect } from 'react-redux'
import { fetchBills, toggleToMyBills } from '../../../Actions/webActions'
import Bill from './Bill.component.js'

const mapDispatchToProps = {
  fetchBills,
  toggleToMyBills
}

const mapStateToProps = (state, ownProps) => {
  const bill = state.bills.bills.find(bill => bill.billId === ownProps.params.bill)
  const isAdded = bill ? Boolean(state.bills.myBills.find(myBill => myBill === bill.billId)) : false

  return {
    ...bill,
    isAdded
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
