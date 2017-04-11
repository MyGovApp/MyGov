/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpReactModularPlainRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'bills',
  getComponent (nextState, next) {
    require.ensure([
      './Bills.container',
      './Bills.modules'
    ], (require) => {
      const Bills = require('./Bills.container').default
      const billsReducer = require('./Bills.modules').default

      injectReducer(store, {
        key: 'bills',
        reducer: billsReducer
      })

      next(null, Bills)
    })
  }
})

// ------------------------------------
// INPUT
// ------------------------------------
import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: '${1:bills}',
  getComponent (nextState, next) {
    require.ensure([
      './${2:Bills}.container',
      './${2:Bills}.modules'
    ], (require) => {
      const ${2:Bills} = require('./${2:Bills}.container').default
      const ${1:bills}Reducer = require('./${2:Bills}.modules').default

      injectReducer(store, {
        key: '${1:bills}',
        reducer: ${1:bills}Reducer
      })

      next(null, ${2:Bills})
    })
  }
})


// ------------------------------------
// GENERATED
// ------------------------------------
import { injectReducer } from \'store/reducers\'\n\nexport default (store) => ({\n\tpath: \'${1:bills}\',\n\tgetComponent (nextState, next) {\n\t\trequire.ensure([\n\t\t\t\'./${2:Bills}.container\',\n\t\t\t\'./${2:Bills}.modules\'\n\t\t], (require) => {\n\t\t\tconst ${2:Bills} = require(\'./${2:Bills}.container\').default\n\t\t\tconst ${1:bills}Reducer = require(\'./${2:Bills}.modules\').default\n\n\t\t\tinjectReducer(store, {\n\t\t\t\tkey: \'${1:bills}\',\n\t\t\t\treducer: ${1:bills}Reducer\n\t\t\t})\n\n\t\t\tnext(null, ${2:Bills})\n\t\t})\n\t}\n})\n
