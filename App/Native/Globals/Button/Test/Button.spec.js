import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper } from './Button.setup'

describe('Native Hello World', () => {
  it('should render the Button component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
