import React, { PropTypes } from 'react'
import s from './LabelValue.styles.scss'

const LabelValue = ({ label, value }) => {
  return (
    <p className={s.labelValue}>
      <span className={s.label}>{label}</span>
      {value}
    </p>
  )
}

LabelValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

module.exports = LabelValue
