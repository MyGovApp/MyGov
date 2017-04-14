import { connect } from 'react-redux'
import { fetchBills } from '../../../Actions/webActions'
import Bill from './Bill.component.js'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps.params.bill :  : ', ownProps.params.bill)
  console.log('state.bills.bills.length :  : ', state.bills.bills.length)
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
