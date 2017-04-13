import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'bill/:bill',
  getComponent (nextState, next) {
    require.ensure([
      './Bill.container',
      '../../../Modules/Bills/Bills.modules'
    ], (require) => {
      const Bill = require('./Bill.container').default
      const billsReducer = require('../../../Modules/Bills/Bills.modules').default

      injectReducer(store, {
        key: 'bills',
        reducer: billsReducer
      })

      next(null, Bill)
    })
  }
})
