import fetch from '../Utilities/isomorphic-fetch'
import { store } from '../Web/main'

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
  updateBillFilters
}

function fetchBills () {
  const prevFetchTimestamp = store.getState().bills.fetchTimestamp
  const currentTime = Date.now()
  const oneHour = 1000 * 60 * 60

  if (currentTime > prevFetchTimestamp + oneHour) {
    return dispatch => {
      dispatch({ type : 'START_REQUEST' })
      return fetchApi(dispatch)
    }
  }

  return { type: null }
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

function updateBillFilters (updates) {
  return {
    type: 'UPDATE_BILL_FILTERS',
    ...updates
  }
}
