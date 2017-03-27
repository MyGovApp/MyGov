import { combineReducers } from 'redux'
import bills from '../../Modules/Bills/Bills.modules'
import helloWorldAsync from '../../Modules/HelloWorldAsync/HelloWorldAsync.modules'

export default combineReducers({
  bills,
  helloWorldAsync
})
