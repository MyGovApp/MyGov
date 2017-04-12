import { connect } from 'react-redux'
import { toggleDrawer, updateBillFilters } from '../../../Actions/webActions'
import NavigationDrawer from './NavigationDrawer.component'

const mapDispatchToProps = {
  toggleDrawer,
  updateBillFilters
}

const mapStateToProps = (state, ownProps) =>
  ({ ...state.DrawerContent, ...state.NavigationDrawer })

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
