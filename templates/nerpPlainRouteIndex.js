/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpPlainRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
import CoreLayout from ''

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute  : { onEnter: (nextState, replace) => replace('/hello-world') },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./Bills').default(store)
        ])
      })
    }
  }

  return routes
}

export default createRoutes

// ------------------------------------
// INPUT
// ------------------------------------
import ${1:CoreLayout} from '${2}'

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: ${1:CoreLayout},
    indexRoute  : { onEnter: (nextState, replace) => replace('/${3:hello-world}') },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./${4:Bills}').default(store)${5}
        ])
      })
    }
  }

  return routes
}

export default createRoutes


// ------------------------------------
// GENERATED
// ------------------------------------
import ${1:CoreLayout} from \'${2}\'\n\nexport const createRoutes = (store) => {\n\tconst routes = {\n\t\tpath: \'/\',\n\t\tcomponent: ${1:CoreLayout},\n\t\tindexRoute\t: { onEnter: (nextState, replace) => replace(\'/${3:hello-world}\') },\n\t\tgetChildRoutes (location, next) {\n\t\t\trequire.ensure([], (require) => {\n\t\t\t\tnext(null, [\n\t\t\t\t\trequire(\'./${4:Bills}\').default(store)${5}\n\t\t\t\t])\n\t\t\t})\n\t\t}\n\t}\n\n\treturn routes\n}\n\nexport default createRoutes\n
