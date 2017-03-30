import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('UPDATE_BILL_FILTERS', (state, action) => ({
  sortBy: action.sortBy ? action.sortBy : state.sortBy,
  sortOrder: action.sortOrder ? action.sortOrder : state.sortOrder,
  filters: action.filters ? action.filters : state.filters
}))

modules.initialState = {
  sortOrder: 'decending',
  sortBy: 'progress',
  filters: []
}

export default modules.createReducer()
