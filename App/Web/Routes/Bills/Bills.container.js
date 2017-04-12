import { connect } from 'react-redux'
import { fetchBills } from '../../../Actions/webActions'
import Bills from './Bills.component.js'
import filterBills from '../../../Modules/Bills/filterBills'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  renderPage: state.bills.renderPage,
  loading: state.bills.loading,
  bills: filterBills(state.bills.bills, state.DrawerContent, state.SearchInput.search, state.bills.myBills),
  options: { ...state.DrawerContent }
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
