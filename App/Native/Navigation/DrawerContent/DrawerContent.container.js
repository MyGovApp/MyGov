import { connect } from 'react-redux'
import { updateBillFilters } from '../../../Modules/actions'
import DrawerContent from './DrawerContent.component'

const mapDispatchToProps = {
  updateBillFilters
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
