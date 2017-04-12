import React, { PropTypes } from 'react'
import classes from './Loader.styles.scss'

const Loader = ({ containerStyles = {} }) => {
  return (
    <div className={classes.wrap} style={{ ...containerStyles }}>
      <div className={classes.loader} />
      <div className={classes.loaderbefore} />
      <div className={classes.circular} />
      <div className={`${classes.circular} ${classes.another}`} />
      <div className={classes.text}>Loading</div>
    </div>
  )
}

Loader.propTypes = {
  containerStyles: PropTypes.object
}

module.exports = Loader
