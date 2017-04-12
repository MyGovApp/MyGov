import React, { Component, PropTypes } from 'react'
import s from './DrawerButton.syles.scss'

class DrawerButton extends Component {
  setup () {
    const { leftIcon, rightIcon } = this.props

    return {
      indexContainer: this.props.isIndex ? s.indexContainer : '',
      indexText: this.props.isIndex ? s.indexText : '',
      leftIcon,
      rightIcon
    }
  }

  render () {
    const { indexContainer, indexText, leftIcon, rightIcon } = this.setup()

    return (
      <div
        className={`${s.container} ${indexContainer}`}
        onClick={this.props.onPress}>

        <div className={s.leftGroup}>
          {leftIcon && (<img src={leftIcon} className={s.iconLeft} />)}
          <h3 className={`${s.text} ${indexText}`}>{this.props.text}</h3>
        </div>
        {rightIcon && (<img src={rightIcon} className={s.iconRight} />)}
      </div>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  isIndex: PropTypes.bool
}

export default DrawerButton
