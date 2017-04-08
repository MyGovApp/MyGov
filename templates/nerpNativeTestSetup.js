/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpNativeTestSetup.js'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import ExampleContainer from '../Example.container'
import ExampleComponent from '../Example.component'

const props = {}

const newStore = configureMockStore([thunk])

const mockStore = newStore({
  Example: {}
})

export const ContainerWrapper = () => (
  <Provider store={mockStore}>
    <ExampleContainer {...props} />
  </Provider>
)

export const ComponentWrapper = () => (<ExampleComponent {...props} />)

// ------------------------------------
// INPUT
// ------------------------------------
import React from 'react'
${2:import { Provider \\} from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import ${1:Example}Container from '../${1:Example}.container'}
import ${1:Example}Component from '../${1:Example}.component'

const props = {${3}}
${2:
const newStore = configureMockStore([thunk])

const mockStore = newStore({
  ${1:Example}: {${4}\\}
\\})

export const ContainerWrapper = () => (
  <Provider store={mockStore\\}>
    <${1:Example}Container {...props\\} />
  </Provider>
)
}
export const ComponentWrapper = () => (<${1:Example}Component {...props} />)


// ------------------------------------
// GENERATED
// ------------------------------------
import React from \'react\'\nimport { Provider } from \'react-redux\'\nimport configureMockStore from \'redux-mock-store\'\nimport thunk from \'redux-thunk\'\n\nimport ${1:Example}Container from \'../${1:Example}.container\'\nimport ${1:Example}Component from \'../${1:Example}.component\'\n\nconst props = {${2}}\n\nconst newStore = configureMockStore([thunk])\n\nconst mockStore = newStore({\n\t${1:Example}: {${3}}\n})\n\nexport const ContainerWrapper = () => (\n\t<Provider store={mockStore}>\n\t\t<${1:Example}Container {...props} />\n\t</Provider>\n)\n\nexport const ComponentWrapper = () => (<${1:Example}Component {...props} />)\n\n

import React from \'react\'\n${2:import { Provider \\} from \'react-redux\'\nimport configureMockStore from \'redux-mock-store\'\nimport thunk from \'redux-thunk\'\n\nimport ${1:Example}Container from \'../${1:Example}.container\'}\nimport ${1:Example}Component from \'../${1:Example}.component\'\n\nconst props = {${3}}\n${2:\nconst newStore = configureMockStore([thunk])\n\nconst mockStore = newStore({\n\t${1:Example}: {${4}\\}\n\\})\n\nexport const ContainerWrapper = () => (\n\t<Provider store={mockStore\\}>\n\t\t<${1:Example}Container {...props\\} />\n\t</Provider>\n)\n}\nexport const ComponentWrapper = () => (<${1:Example}Component {...props} />)\n
