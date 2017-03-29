import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Modules/actions'
import Header from './Header.component.js'

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.navigationDrawer.drawerOpen
})

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
