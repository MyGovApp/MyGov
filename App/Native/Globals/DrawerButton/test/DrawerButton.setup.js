import React from 'react'
import { images } from '../../../Themes'

import DrawerButtonComponent from '../DrawerButton.component'

const props = {
  text: 'Test',
  onPress: jest.fn(),
  leftIcon: images.accountIcon,
  rightIcon: images.accountIcon,
  isIndex: true
}

export const ComponentWrapper = () => (<DrawerButtonComponent {...props} />)
