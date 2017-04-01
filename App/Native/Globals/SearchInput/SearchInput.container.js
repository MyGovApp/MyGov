import { connect } from 'react-redux'
import { searchBills } from '../../../Modules/actions'
import SearchInput from './SearchInput.component.js'

const mapDispatchToProps = {
  searchBills
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
