import { pull } from 'lodash'
import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('UPDATE_BILL_FILTERS', (state, action) => {
  let filters

  if (action.filter) {
    filters = state.filters.find((val) => val === action.filter)
      ? pull(state.filters, action.filter)
      : [ ...state.filters, action.filter ]
  }

  return {
    ...action,
    filters: action.filter ? filters : state.filters
  }
})

modules.initialState = {
  sortOrder: 'decending',
  sortBy: 'progress',
  statusActive: true,
  statusFailed: false,
  statusTabled: false,
  statusEnacted: false,
  filters: []
}

export default modules.createReducer()
