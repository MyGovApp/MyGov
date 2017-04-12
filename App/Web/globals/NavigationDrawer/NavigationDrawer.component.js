import React, { Component, PropTypes } from 'react'
import classes from './NavigationDrawer.styles.scss'
import DrawerButton from 'Globals/DrawerButton'
import I from '../../../Native/Themes/Images'

class NavigationDrawer extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { drawerOpen, toggleDrawer } = this.props
    const toggleStyle = drawerOpen ? { marginRight: 0 } : { marginRight: '-80%' }

    return (
      <div
        className={classes.drawer}
        style={toggleStyle}>

        <DrawerButton text='isIndex' isIndex />
        <DrawerButton text='Test' leftIcon={I.tabledIcon} />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
        <DrawerButton text='Test' />
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func
}

module.exports = NavigationDrawer
