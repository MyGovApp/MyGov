import { combineReducers } from 'redux'
import bills from '../../Modules/Bills/Bills.modules'
import drawerContent from '../../Modules/DrawerContent/DrawerContent.modules'
import searchInput from '../../Modules/SearchInput/SearchInput.modules'

export default combineReducers({
  bills,
  drawerContent,
  searchInput
})
