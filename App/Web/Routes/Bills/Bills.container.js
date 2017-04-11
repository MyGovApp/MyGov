import { connect } from 'react-redux'
import { fetchBills } from '../../../Actions/webActions'
import Bills from './Bills.component.js'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
