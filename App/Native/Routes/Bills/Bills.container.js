import { connect } from 'react-redux'
import { fetchBills } from '../../../Actions/nativeActions'
import Bills from './Bills.component'
import filterBills from '../../../Modules/Bills/filterBills'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.Bills.loading,
  bills: filterBills(state.Bills.bills, state.DrawerContent, state.SearchInput.search, state.Bills.myBills),
  options: { ...state.DrawerContent },
  filteredBills: state.Bills.filteredBills
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
