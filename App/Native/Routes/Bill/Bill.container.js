import { connect } from 'react-redux'
import { toggleToMyBills } from '../../../Modules/actions'
import Bill from './Bill.component.js'

const mapDispatchToProps = {
  toggleToMyBills
}

const mapStateToProps = (state, ownProps) => ({
  isAdded: Boolean(state.bills.myBills.find(bill => ownProps.bill_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
