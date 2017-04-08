import React from 'react'
import { View } from 'react-native'
import s from './Footer.styles.js'
import { images as I } from '../../Themes'
import IconButton from '../IconButton'

const Footer = () => {
  const footerItems = [
    { route: 'bills', text: 'Bills', image: I.billsIcon },
    { route: 'congress', text: 'Congress', image: I.congressIcon },
    { route: 'notifications', text: 'Notifications', image: I.notificationIcon },
    { route: 'dev', text: 'Dev', image: I.devIcon }
  ]

  return (
    <View style={s.footerContainer} >
      {footerItems.map((item, i) => <IconButton key={i} {...item} />)}
    </View>
  )
}

module.exports = Footer
