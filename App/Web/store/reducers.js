import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import NavigationDrawer from '../../Modules/NavigationDrawer/NavigationDrawer.modules'
import DrawerContent from '../../Modules/DrawerContent/DrawerContent.modules'
import SearchInput from '../../Modules/SearchInput/SearchInput.modules'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    DrawerContent,
    NavigationDrawer,
    SearchInput,
    router,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
