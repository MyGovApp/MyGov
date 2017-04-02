import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

modules.handleAction('RECEIVE_BILLS', (state, action) => ({
  bills: action.bills,
  loading: false
}))

modules.handleAction('RECEIVE_MYBILLS', (state, action) => ({
  myBills: action.myBills
}))

modules.initialState = {
  loading: false,
  bills: [],
  filteredBills: [],
  myBills: []
}

export default modules.createReducer()
