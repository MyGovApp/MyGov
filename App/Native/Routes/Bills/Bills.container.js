import { connect } from 'react-redux'
import { fetchBills } from '../../../Modules/actions'
import Bills from './Bills.component'
import filterBills from '../../../Modules/Bills/filterBills'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.bills.loading,
  bills: filterBills(state.bills.bills, state.drawerContent, state.searchInput.search, state.bills.myBills),
  options: { ...state.drawerContent },
  filteredBills: state.bills.filteredBills
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
