import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper, ContainerWrapper } from './DrawerContent.setup'

describe('Native DrawerContent', () => {
  it('should render the DrawerContent component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the DrawerContent container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
