import React from 'react'
import ButtonComponent from '../Button.component'

const props = {
  onPress: jest.fn(),
  text: 'test'
}

export const ComponentWrapper = () => (<ButtonComponent {...props} />)
