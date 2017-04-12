import React, { Component, PropTypes } from 'react'
import Header from 'Globals/Header'
import classes from './CoreLayout.styles.scss'
import MainNav from 'Globals/MainNav'
import NavigationDrawer from 'Globals/NavigationDrawer'

class CoreLayout extends Component {
  componentDidMount () {
    this.watchScrollEvents()
  }

  watchScrollEvents () {
    const { scrollReachEnd } = this.props
    const main = document.getElementById('main')

    main.onscroll = (e) => {
      const { scrollHeight, scrollTop, offsetHeight } = e.srcElement

      if ((scrollHeight - scrollTop) < (offsetHeight + 1)) {
        scrollReachEnd()
      }
    }
  }

  render () {
    const { children, drawerOpen } = this.props
    const toggleStyle = drawerOpen ? { marginLeft: '-80%' } : { marginLeft: 0 }

    return (
      <div id='coreLayout' className={classes.coreLayout}>
        <div
          className={classes.applicaion}
          style={toggleStyle}>
          <Header />
          <main id='main' className={classes.main}>
            {children}
          </main>
          <MainNav />
        </div>
        <NavigationDrawer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node,
  drawerOpen: PropTypes.bool,
  scrollReachEnd: PropTypes.func
}

module.exports = CoreLayout
