import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Actions/webActions'
import NavigationDrawer from './NavigationDrawer.component.js'

const mapStateToProps = (state, ownProps) => {
  return { drawerOpen: state.NavigationDrawer.drawerOpen }
}

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
