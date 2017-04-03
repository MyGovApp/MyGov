import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import BillsContainer from '../Bills.container'
import BillsComponent from '../Bills.component'

const initialState = {
  loading: false,
  bills: [],
  options: {},
  filteredBills: [],
  myBills: [],
  fetchBills: () => {}
}

const props = initialState

const newStore = configureMockStore([thunk])

const mockStore = newStore(initialState)

export const ContainerWrapper = () => (
  <Provider store={mockStore}>
    <BillsContainer />
  </Provider>
)

export const ComponentWrapper = () => (<BillsComponent {...props} />)
