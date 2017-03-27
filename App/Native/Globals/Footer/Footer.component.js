import React from 'react'
import { View } from 'react-native'
import classes from './Footer.styles.js'
import Images from '../../Themes/Images'
import IconButton from '../IconButton'

const Footer = () => {
  const footerItems = [
    { route: 'bills', text: 'Bills', image: Images.billsIcon },
    { route: 'congress', text: 'Congress', image: Images.congressIcon },
    { route: 'notifications', text: 'Notifications', image: Images.notificationIcon },
    { route: 'account', text: 'Me', image: Images.accountIcon }
  ]

  return (
    <View style={classes.footerContainer} >
      {footerItems.map((item, i) => <IconButton key={i} {...item} />)}
    </View>
  )
}

module.exports = Footer
