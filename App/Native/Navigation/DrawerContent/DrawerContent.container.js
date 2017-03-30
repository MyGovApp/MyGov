import { connect } from 'react-redux'
import { updateBillFilters } from '../../../Modules/actions'
import DrawerContent from './DrawerContent.component'

const mapDispatchToProps = {
  updateBillFilters
}

const mapStateToProps = (state, ownProps) => {
  const {
    filters,
    sortBy,
    sortOrder,
    statusEnacted,
    statusActive,
    statusFailed,
    statusTabled
  } = state.drawerContent

  return {
    filters,
    sortBy,
    sortOrder,
    statusEnacted,
    statusActive,
    statusFailed,
    statusTabled
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
