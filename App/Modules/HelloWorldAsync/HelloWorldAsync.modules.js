import fetch from '../../Utilities/isomorphic-fetch'
import ReduxModules from '../../Utilities/ReduxModules'
const m = new ReduxModules()

export const asyncToggleColor = () => {
  return dispatch => {
    dispatch({ type : 'START_REQUEST' })
    return fetch('http://{ LOCAL IP ADDRESS }:3001/api/v1/helloWorldAsync')
      .then(res => res.json())
      .then(json => dispatch({ type: 'ASYNC_TOGGLE_COLOR' }))
      .catch(err => console.log('Error: ', err))
  }
}

m.handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

m.handleAction('ASYNC_TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red',
  loading: false
}))

m.initialState = {
  color: 'red',
  loading: false
}

export default m.createReducer()
