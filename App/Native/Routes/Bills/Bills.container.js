import { connect } from 'react-redux'
import { toggleColor } from '../../../Modules/Bills/Bills.modules'
import Bills from './Bills.component'

const mapDispatchToProps = {
  toggleColor
}

const mapStateToProps = (state, ownProps) => ({
  color: state.bills.color
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
