import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper, ContainerWrapper } from './SearchInput.setup'

describe('Native SearchInput', () => {
  it('should render the SearchInput component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the SearchInput container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
