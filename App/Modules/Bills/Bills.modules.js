import { handleAction, createReducer } from '../../Utilities/handleAction'

export const fetchBills = () => {
  return dispatch => {
    dispatch({ type : 'START_REQUEST' })
    return fetch('http://192.168.0.17:3001/api/v1/bills')
      .then(res => res.json())
      .then(bills => dispatch({
        type: 'RECEIVE_BILLS',
        bills
      }))
      .catch(err => console.log('Error: ', err))
  }
}

handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

handleAction('RECEIVE_BILLS', (state, action) => ({
  bills: action.bills,
  loading: false
}))

export const toggleColor = () => ({ type: 'TOGGLE_COLOR' })

handleAction('TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red'
}))

const initialState = {
  color: 'red',
  loading: false,
  bills: []
}

export default createReducer(initialState)
