import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('UPDATE_BILL_FILTERS', (state, action) => ({
}))

modules.initialState = {
  sortOrder: 'decending',
  sortBy: 'progress',
  filters: []
}

export default modules.createReducer()
