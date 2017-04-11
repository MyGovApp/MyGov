import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Actions/webActions'
import Header from './Header.component.js'

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.NavigationDrawer.drawerOpen
})

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
