import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './NavigationRouter.styles'
import NavigationDrawer from '../NavigationDrawer'
import NavItems from '../NavItems'

// screens identified by the router
import Bills from '../../Routes/Bills'

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
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
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
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
