import { connect } from 'react-redux'
import { searchBills } from '../../../Actions/webActions'
import SearchInput from './SearchInput.component.js'

const mapDispatchToProps = {
  searchBills
}

const mapStateToProps = (state, ownProps) => ({
  search: state.SearchInput.search
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
