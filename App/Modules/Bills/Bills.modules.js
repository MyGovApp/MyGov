import ReduxModules from '../../Utilities/ReduxModules'
const m = new ReduxModules()

m.handleAction('START_REQUEST', (s, a) => ({
  loading: true
}))

m.handleAction('RECEIVE_BILLS', (s, a) => ({
  bills: a.bills,
  loading: false
}))

m.handleAction('RECEIVE_MYBILLS', (s, a) => ({
  myBills: a.myBills
}))

m.handleAction('SCROLL_REACH_END', (s, a) => ({
  renderPage: s.renderPage + 1
}))

m.initialState = {
  loading: false,
  renderPage: 1,
  bills: [],
  filteredBills: [],
  myBills: []
}

export default m.createReducer()
