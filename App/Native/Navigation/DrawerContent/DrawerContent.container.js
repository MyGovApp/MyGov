import { connect } from 'react-redux'
import { updateBillFilters } from '../../../Modules/actions'
import DrawerContent from './DrawerContent.component'

const mapDispatchToProps = {
  updateBillFilters
}

const mapStateToProps = (state, ownProps) => {
  const { filters, sortBy, sortOrder } = state.drawerContent
  return { filters, sortBy, sortOrder }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
