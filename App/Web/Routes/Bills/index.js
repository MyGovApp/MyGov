import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'bills',
  getComponent (nextState, next) {
    require.ensure([
      './Bills.container',
      '../../../Modules/Bills/Bills.modules'
    ], (require) => {
      const Bills = require('./Bills.container').default
      const billsReducer = require('../../../Modules/Bills/Bills.modules').default

      injectReducer(store, {
        key: 'bills',
        reducer: billsReducer
      })

      next(null, Bills)
    })
  }
})
