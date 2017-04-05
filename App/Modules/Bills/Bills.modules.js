import { handleAction, createReducer } from '../../Utilities/ReduxModules/ReduxModules-copy'

handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

handleAction('RECEIVE_BILLS', (state, action) => ({
  bills: action.bills,
  loading: false
}))

handleAction('RECEIVE_MYBILLS', (state, action) => ({
  myBills: action.myBills
}))

const initialState = {
  loading: false,
  bills: [],
  filteredBills: [],
  myBills: []
}

export default createReducer(initialState)
