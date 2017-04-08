import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import SearchInputContainer from '../SearchInput.container'
import SearchInputComponent from '../SearchInput.component'

const props = {
  searchBills: jest.fn(),
  height: 1
}

const newStore = configureMockStore([thunk])

const mockStore = newStore({
  SearchInput: {
    search: ''
  }
})

export const ContainerWrapper = () => (
  <Provider store={mockStore}>
    <SearchInputContainer {...props} />
  </Provider>
)

export const ComponentWrapper = () => (<SearchInputComponent {...props} />)
