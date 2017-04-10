import { pull } from 'lodash'
import ReduxModules from '../../Utilities/ReduxModules'
const m = new ReduxModules()

m.handleAction('UPDATE_BILL_FILTERS', (s, a) => {
  if (a.filter) {
    return {
      ...a,
      filters: s.filters.find((val) => val === a.filter)
        ? [ ...pull(s.filters, a.filter) ]
        : [ ...s.filters, a.filter ]
    }
  }

  return { ...a }
})

m.initialState = {
  sortOrder: 'decending',
  sortBy: 'progress',
  active: true,
  failed: false,
  tabled: false,
  enacted: false,
  myBills: false,
  filters: []
}

export default m.createReducer()
