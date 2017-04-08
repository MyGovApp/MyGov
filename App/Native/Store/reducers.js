import { combineReducers } from 'redux'
import Bills from '../../Modules/Bills/Bills.modules'
import DrawerContent from '../../Modules/DrawerContent/DrawerContent.modules'
import SearchInput from '../../Modules/SearchInput/SearchInput.modules'

export default combineReducers({
  Bills,
  DrawerContent,
  SearchInput
})
