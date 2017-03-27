import { connect } from 'react-redux'
import { toggleColor, fetchBills } from '../../../Modules/Bills/Bills.modules'
import Bills from './Bills.component'

const mapDispatchToProps = {
  toggleColor,
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  color: state.bills.color,
  loading: state.bills.loading,
  bills: state.bills.bills
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
