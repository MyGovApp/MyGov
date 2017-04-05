import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import s from './NavigationRouter.styles'
import NavigationDrawer from '../NavigationDrawer'
import NavItems from '../NavItems'

// screens identified by the router
import Bills from '../../Routes/Bills'
import Bill from '../../Routes/Bill'

// ------------------------------------
// Documentation: https://github.com/aksonov/react-native-router-flux
// ------------------------------------

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={s.navBar}
            titleStyle={s.title}
            leftButtonIconStyle={s.leftButton}
            rightButtonTextStyle={s.rightButton}
          >
            <Scene
              initial
              key='bills'
              component={Bills}
              title='Bills'
              renderRightButton={NavItems.hamburgerButton}
              renderBackButton={() => false}
              direction='leftToRight'
            />
            <Scene
              key='bill'
              component={Bill}
              title='Bill Detial'
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
