import React, { Component, PropTypes } from 'react'
import { startCase } from 'lodash'
import { browserHistory } from '../../main'
import classes from './Header.styles.scss'
import HamburgerMenu from 'Globals/HamburgerMenu'
import I from '../../../Native/Themes/Images'

class Header extends Component {
  componentWillMount () {
    this.setState({
      text: startCase(window.location.pathname),
      LeftIcon: this.setLeftIcon(window.location),
      RightIcon: this.setRightIcon(window.location)
    })

    browserHistory.listen((location) => {
      this.setState({
        text: startCase(location.pathname),
        LeftIcon: this.setLeftIcon(location),
        RightIcon: this.setRightIcon(location)
      })
    })
  }

  setLeftIcon = (location) => {
    const pathname = location.pathname[0] === '/' ? location.pathname.slice(1) : location.pathname

    const BackButton = this.renderBackButton
    const PlaceHolder = this.renderPlaceHolder

    switch (true) {
      case /^bill\//.test(pathname):
        return () => <BackButton route='/bills' />
      default:
        return () => <PlaceHolder />
    }
  }

  setRightIcon = (location) => {
    const pathname = location.pathname[0] === '/' ? location.pathname.slice(1) : location.pathname

    const PlaceHolder = this.renderPlaceHolder
    const BillsMenuIcon = this.renderBillsMenuIcon

    switch (true) {
      case /^bills/.test(pathname):
        return () => <BillsMenuIcon />
      default:
        return () => <PlaceHolder />
    }
  }

  renderBillsMenuIcon = () => {
    const { toggleDrawer, drawerOpen } = this.props
    return (<HamburgerMenu
      onClick={toggleDrawer}
      open={drawerOpen}
    />)
  }

  renderPlaceHolder = () => (
    <div className='placeholder' style={{ width: '30px', height: '30px' }} />
  )

  renderBackButton = ({ route }) => {
    return (
      <img
        onClick={route ? () => browserHistory.push(route) : browserHistory.goBack}
        style={{ width: '30px', height: '30px' }}
        src={I.leftChevronIcon}
      />
    )
  }

  render () {
    const { text, LeftIcon, RightIcon } = this.state

    return (
      <nav id={'header'} className={classes.header}>
        <LeftIcon />
        <p>{text}</p>
        <RightIcon />
      </nav>
    )
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  drawerOpen: PropTypes.bool
}

module.exports = Header
