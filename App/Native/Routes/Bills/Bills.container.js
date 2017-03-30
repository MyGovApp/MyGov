import { connect } from 'react-redux'
import { fetchBills } from '../../../Modules/actions'
import Bills from './Bills.component'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.bills.loading,
  bills: state.bills.bills,
  options: { ...state.drawerContent },
  filteredBills: state.bills.filteredBills
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
