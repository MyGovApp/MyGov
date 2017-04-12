import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Actions/webActions'
import NavigationDrawer from './NavigationDrawer.component.js'

const mapDispatchToProps = {
  toggleDrawer
}

const mapStateToProps = (state, ownProps) =>
  ({ ...state.DrawerContent, ...state.NavigationDrawer })

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
