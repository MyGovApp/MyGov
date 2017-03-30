import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('TOGGLE_DRAWER', (state, action) => ({
  drawerOpen: !state.drawerOpen
}))

const initialState = { drawerOpen: false }

export default modules.createReducer(initialState)
