/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpSmartComponent'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React, { Component, PropTypes } from 'react'
import classes from './ComponentName.styles.scss'

class ComponentName extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { exampleProp1 } = this.props
    return (
      <div>
        <h2>Smart Component {exampleProp1}</h2>
      </div>
    )
  }
}

ComponentName.propTypes = {
  exampleProp1: PropTypes.number.isRequired
}

module.exports = ComponentName


// ------------------------------------
// INPUT
// ------------------------------------
import React, { Component, PropTypes } from 'react'
import classes from './${1:ComponentName}.styles.scss'

class ${1:ComponentName} extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { exampleProp1 } = this.props
    return (
      <div>
        <h2>Smart Component {exampleProp1}</h2>
      </div>
    )
  }
}

${1:ComponentName}.propTypes = {
  exampleProp1: PropTypes.number.isRequired
}

module.exports = ${1:ComponentName}


// ------------------------------------
// GENERATED
// ------------------------------------
import React, { Component, PropTypes } from \'react\'\nimport classes from \'./${1:ComponentName}.styles.scss\'\n\nclass ${1:ComponentName} extends Component {\n\tconstructor () {\n\t\tsuper()\n\t\tthis.state = {}\n\t}\n\trender () {\n\t\tconst { exampleProp1 } = this.props\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<h2>Smart Component {exampleProp1}</h2>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n${1:ComponentName}.propTypes = {\n\texampleProp1: PropTypes.number.isRequired\n}\n\nmodule.exports = ${1:ComponentName}\n
