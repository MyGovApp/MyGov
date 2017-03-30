import ReduxModules from '../../Utilities/ReduxModules'
const modules = new ReduxModules()

modules.handleAction('TOGGLE_DRAWER', (state, action) => ({
  drawerOpen: !state.drawerOpen
}))

modules.initialState = { drawerOpen: false }

export default modules.createReducer()
