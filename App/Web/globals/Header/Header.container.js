import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Modules/actions'
import Header from './Header.component.js'

const mapDispatchToProps = {
  toggleDrawer
}

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.NavigationDrawer.drawerOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
