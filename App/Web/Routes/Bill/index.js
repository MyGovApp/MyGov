export default (store) => ({
  path: 'bill',
  getComponent (nextState, next) {
    require.ensure([
      './Bill.container'
    ], (require) => {
      const Bill = require('./Bill.container').default

      next(null, Bill)
    })
  }
})
