import ReduxModules from '../../Utilities/ReduxModules'
const m = new ReduxModules()

m.handleAction('TOGGLE_DRAWER', (s, a) => ({
  drawerOpen: !s.drawerOpen
}))

m.initialState = { drawerOpen: false }

export default m.createReducer()
