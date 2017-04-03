import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper, ContainerWrapper } from './Bills.setup'

describe('Native Bills Route', () => {
  it('should render the Bills component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    console.log('tree : in the first test : ', tree)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Bills container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
