import ReduxModules from '../../Utilities/ReduxModules'
const m = new ReduxModules()

m.handleAction('SEARCH_BILLS', (s, a) => {
  return { search: a.search }
})

m.initialState = { search: '' }

export default m.createReducer()
