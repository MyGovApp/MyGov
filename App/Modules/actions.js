// press cmd + k + 1 in atom to view a condensed registry.
// press cmd + k + 0 in atom to revert.
// search the project (cmd + shift + f in atom) for an 'ACTION_TYPE' to identify subscribers
// search the project for an actionCreator to identify dispatchers
// please keep alphebetical

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

export const toggleDrawer = () => ({ type: 'TOGGLE_DRAWER' })

export const updateBillFilters = (updates) => ({
  type: 'UPDATE_BILL_FILTERS',
  updates
})

// { sortOrder }
// { sortBy: 'progress' }
//
// {
//   sortBy: 'progress',
//   filter: 'education'
// }
