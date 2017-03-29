import { handleAction, createReducer } from '../../Utilities/handleAction'

handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

handleAction('RECEIVE_BILLS', (state, action) => ({
  bills: action.bills,
  loading: false
}))

const initialState = {
  loading: false,
  bills: []
}

export default createReducer(initialState)
