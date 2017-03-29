import { connect } from 'react-redux'
import { actionCreator } from '../../../Modules/DrawerContent'
import DrawerContent from './DrawerContent.component'

const mapDispatchToProps = {
  actionCreator
}

const mapStateToProps = (state, ownProps) => ({
  exampleProp: state.DrawerContent.exampleProp
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
