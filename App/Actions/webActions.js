import fetch from '../Utilities/isomorphic-fetch'
import { store } from '../Web/main'
import { pull } from 'lodash'

// NOTE:
// Search the project for an actionCreator to identify dispatchers
// Search the project for an 'ACTION_TYPE' to identify subscribers
// The use of ES5 function syntax here takes advantage of function hoisting,
// allowing us to keep the exports at the top of this file as a readabile actions registry
// Please keep alphebetical

export {
  fetchBills,
  scrollReachEnd,
  searchBills,
  toggleDrawer,
  toggleToMyBills,
  updateBillFilters
}

function fetchBills () {
  const prevFetchTimestamp = store.getState().bills.fetchTimestamp
  const currentTime = Date.now()
  const oneHour = 1000 * 60 * 60

  return dispatch => {
    dispatch(getMyBills())
    if (currentTime > prevFetchTimestamp + oneHour) {
      dispatch({ type : 'START_REQUEST' })
      return fetchApi(dispatch)
    }
    return { type: null }
  }
}

const fetchApi = (dispatch) => (
  fetch('http://localhost:3001/api/v1/bills')
    .then(res => res.json())
      .then(bills => dispatch({
        type: 'RECEIVE_BILLS',
        bills,
        fetchTimestamp: Date.now()
      }))
      .catch(err => console.log('Error: ', err))
)

const getMyBills = () => {
  const myBillsCache = localStorage.getItem('myBills')
  const myBills = myBillsCache ? JSON.parse(myBillsCache) : []

  return { type: 'RECEIVE_MYBILLS', myBills }
}

function scrollReachEnd () {
  return { type: 'SCROLL_REACH_END' }
}

function searchBills (search) {
  return {
    type: 'SEARCH_BILLS',
    search
  }
}

function toggleDrawer () { return { type: 'TOGGLE_DRAWER' } }

function toggleToMyBills (billId) {
  const myBillsCache = localStorage.getItem('myBills')
  const myBills = myBillsCache ? JSON.parse(myBillsCache) : []

  const newMyBills = myBills.find(bill => bill === billId)
    ? [ ...pull(myBills, billId) ]
    : [ ...myBills, billId ]

  localStorage.setItem('myBills', JSON.stringify(newMyBills))
  return { type: 'RECEIVE_MYBILLS', myBills: newMyBills }
}

function updateBillFilters (updates) {
  return {
    type: 'UPDATE_BILL_FILTERS',
    ...updates
  }
}
