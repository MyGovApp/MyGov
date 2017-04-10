import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper } from './Footer.setup'

describe('Native Footer', () => {
  it('should render the Footer component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
