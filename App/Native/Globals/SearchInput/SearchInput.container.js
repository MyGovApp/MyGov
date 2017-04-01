import { connect } from 'react-redux'
import { searchBills } from '../../../Modules/actions'
import SearchInput from './SearchInput.component.js'

const mapDispatchToProps = {
  searchBills
}

const mapStateToProps = (state, ownProps) => ({
  search: state.searchInput.search
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
