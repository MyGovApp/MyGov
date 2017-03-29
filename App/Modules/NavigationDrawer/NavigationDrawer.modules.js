import { handleAction, createReducer } from '../../Utilities/handleAction'

handleAction('TOGGLE_DRAWER', (state, action) => ({
  drawerOpen: !state.drawerOpen
}))

const initialState = { drawerOpen: false }

export default createReducer(initialState)
