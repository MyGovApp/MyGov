const moment = require('moment')

const objValues = (obj) => Object.keys(obj).map((key) => obj[key])

const returnStatus = (history, lastAction) => {
  if (history.enacted) return 'enacted'
  if (objValues(history).find((result) => result === 'fail')) return 'failed'
  if (moment(lastAction).add(4, 'months') > moment(Date.now()) && history.active === true) return 'active'
  return 'tabled'
}

module.exports = returnStatus
