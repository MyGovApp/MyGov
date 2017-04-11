import ReduxModules from '../../Utilities/ReduxModules'
const m = new ReduxModules()

export const toggleColor = () => ({ type: 'TOGGLE_COLOR' })

m.handleAction('TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red'
}))

m.initialState = {
  color: 'red'
}

export default m.createReducer()
