import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('SEARCH_BILLS', (state, action) => {
  return { search: action.search }
})

modules.initialState = { search: '' }

export default modules.createReducer()
