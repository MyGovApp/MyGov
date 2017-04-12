import React from 'react'
import classes from './MainNav.styles.scss'
import NavIconLink from 'Globals/NavIconLink'

import I from '../../../Native/Themes/Images'

const MainNav = () => {
  return (
    <nav id={'mainNav'} className={classes.mainNav}>
      <ul>
        <NavIconLink icon={I.billsIcon} label={'Bills'} route={'/bills'} />
        <NavIconLink icon={I.congressIcon} label={'Congress'} route={'/congress'} />
        <NavIconLink icon={I.notificationIcon} label={'Notifications'} route={'/notifications'} />
        <NavIconLink icon={I.accountIcon} label={'Me'} route={'/account'} />
      </ul>
    </nav>
  )
}

module.exports = MainNav
