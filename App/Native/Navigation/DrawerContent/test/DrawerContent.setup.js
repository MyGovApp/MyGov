import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import DrawerContentContainer from '../DrawerContent.container'
import DrawerContentComponent from '../DrawerContent.component'

const props = {
  updateBillFilters: jest.fn(),
  sortOrder: 'decending',
  sortBy: 'progress',
  active: true,
  failed: false,
  tabled: false,
  enacted: false,
  myBills: false,
  filters: []
}

const newStore = configureMockStore([thunk])

const mockStore = newStore({
  DrawerContent: {
    sortOrder: 'decending',
    sortBy: 'progress',
    active: true,
    failed: false,
    tabled: false,
    enacted: false,
    myBills: false,
    filters: []
  }
})

export const ContainerWrapper = () => (
  <Provider store={mockStore}>
    <DrawerContentContainer {...props} />
  </Provider>
)

export const ComponentWrapper = () => (<DrawerContentComponent {...props} />)
