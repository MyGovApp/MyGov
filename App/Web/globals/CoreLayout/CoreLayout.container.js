import { connect } from 'react-redux'
import { scrollReachEnd } from '../../../Actions/webActions'
import CoreLayout from './CoreLayout.component.js'

const mapDispatchToProps = {
  scrollReachEnd
}

const mapStateToProps = (state, ownProps) => {
  return { drawerOpen: state.NavigationDrawer.drawerOpen }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
