import { connect } from 'react-redux'
import Bill from './Bill.component.js'

const mapDispatchToProps = {
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps.params.bill :  : ', ownProps.params.bill)
  console.log('state.bills.bills.length :  : ', state.bills.bills.length)
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
