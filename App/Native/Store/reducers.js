import { combineReducers } from 'redux'
import bills from '../../Modules/Bills/Bills.modules'
import drawerContent from '../../Modules/DrawerContent/DrawerContent.modules'

export default combineReducers({
  bills,
  drawerContent
})
