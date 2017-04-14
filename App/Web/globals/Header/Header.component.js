import React, { Component, PropTypes } from 'react'
import { startCase } from 'lodash'
import { browserHistory } from '../../main'
import classes from './Header.styles.scss'
import HamburgerMenu from 'Globals/HamburgerMenu'
import I from '../../../Native/Themes/Images'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      showBackButton: false,
      text: '',
      location: ''
    }
  }

  componentWillMount () {
    this.setState({
      text: startCase(window.location.pathname)
    })

    browserHistory.listen((location) => {
      const routeChanged = location !== this.state.location.pathname

      console.log('routeChanged :  : ', routeChanged)

      this.setState({
        text: startCase(location.pathname),
        showBackButton: routeChanged,
        location: location.pathname
      })
    })
  }

  renderBackButton = () => {
    if (this.state.showBackButton) {
      return (
        <img
          onClick={browserHistory.goBack}
          style={{ width: '30px', height: '30px' }}
          src={I.leftChevronIcon}
        />
      )
    }

    return (<div className='backButtonPlaceholder' style={{ width: '30px', height: '30px' }} />)
  }

  render () {
    const { toggleDrawer, drawerOpen } = this.props
    const { text } = this.state

    const BackButton = this.renderBackButton

    return (
      <nav id={'header'} className={classes.header}>
        <BackButton />
        <p>{text}</p>
        <HamburgerMenu
          onClick={toggleDrawer}
          open={drawerOpen}
        />
      </nav>
    )
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  drawerOpen: PropTypes.bool
}

module.exports = Header
