import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

modules.handleAction('RECEIVE_BILLS', (state, action) => ({
  bills: action.bills,
  loading: false
}))

modules.initialState = {
  loading: false,
  bills: []
}

export default modules.createReducer()
