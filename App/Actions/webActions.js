// import { AsyncStorage } from 'react-native'
// import { pull } from 'lodash'
import fetch from '../Utilities/isomorphic-fetch'

// NOTE:
// Search the project for an actionCreator to identify dispatchers
// Search the project for an 'ACTION_TYPE' to identify subscribers
// The use of ES5 function syntax here takes advantage of function hoisting,
// allowing us to keep the exports at the top of this file as a readabile actions registry
// Please keep alphebetical

export {
  fetchBills,
  searchBills,
  toggleDrawer,
  // toggleToMyBills,
  updateBillFilters
}

function fetchBills () {
  return dispatch => {
    dispatch({ type : 'START_REQUEST' })
    return Promise.all([
      fetchApi(dispatch)
      // fetchMyBills(dispatch)
    ])
  }
}

const fetchApi = (dispatch) => (
  fetch('http://localhost:3001/api/v1/bills')
    .then(res => res.json())
      .then(bills => dispatch({
        type: 'RECEIVE_BILLS',
        bills
      }))
      .catch(err => console.log('Error: ', err))
)

// const fetchMyBills = (dispatch) => (
//   AsyncStorage.getItem('myBills')
//   .then(myBills => {
//     if (!myBills) return []
//     return JSON.parse(myBills)
//   })
//   .then(myBills => dispatch({ type: 'RECEIVE_MYBILLS', myBills }))
//   .catch(err => console.log('err : ', err))
// )

function searchBills (search) {
  return {
    type: 'SEARCH_BILLS',
    search
  }
}

function toggleDrawer () { return { type: 'TOGGLE_DRAWER' } }

// function toggleToMyBills (billId) {
//   return dispatch => {
//     return AsyncStorage.getItem('myBills')
//       .then(myBills => {
//         if (!myBills) return []
//         return JSON.parse(myBills)
//       })
//       .then(myBills => {
//         const newMyBills = myBills.find(bill => bill === billId)
//           ? [ ...pull(myBills, billId) ]
//           : [ ...myBills, billId ]
//
//         dispatch({ type: 'RECEIVE_MYBILLS', myBills: newMyBills })
//         AsyncStorage.setItem('myBills', JSON.stringify(newMyBills))
//       })
//       .catch(err => console.log('err : ', err))
//   }
// }

function updateBillFilters (updates) {
  return {
    type: 'UPDATE_BILL_FILTERS',
    ...updates
  }
}
