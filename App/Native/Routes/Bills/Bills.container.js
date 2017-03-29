import { connect } from 'react-redux'
import { fetchBills } from '../../../Modules/Bills/Bills.modules'
import Bills from './Bills.component'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.bills.loading,
  bills: state.bills.bills
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
