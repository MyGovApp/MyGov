/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpDumbComponent'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React, { PropTypes } from 'react'
import classes from './ComponentName.styles.scss'

const ComponentName = ({ exampleProp1, exampleProp2 }) => {
  return (
    <div>
      <h2> exampleProp1: {exampleProp1}</h2>
      <h2> exampleProp2: {exampleProp2}</h2>
    </div>
  )
}

ComponentName.propTypes = {
  exampleProp1: PropTypes.number.isRequired,
  exampleProp2: PropTypes.number
}

module.exports = ComponentName


// ------------------------------------
// INPUT
// ------------------------------------
import React, { PropTypes } from 'react'
import classes from './${1:ComponentName}.styles.scss'

const ${1:ComponentName} = ({ ${2:exampleProp1}${3:, exampleProp2 }}) => {
  return (
    <div>
      <h2> ${2:exampleProp1}: {${2:exampleProp1}}</h2>
      <h2> ${3:exampleProp2}: {${3:exampleProp2}}</h2>
    </div>
  )
}

${1:ComponentName}.propTypes = {
  ${2:exampleProp1}: PropTypes.number.isRequired,
  ${3:exampleProp2}: PropTypes.number
}

module.exports = ${1:ComponentName}


// ------------------------------------
// GENERATED
// ------------------------------------
'import React, { PropTypes } from \'react\'\nimport classes from \'./${1:ComponentName}.styles.scss\'\n\nconst ${1:ComponentName} = ({ ${2:exampleProp1}${3:, exampleProp2 }}) => {\n\treturn (\n\t\t<div>\n\t\t\t<h2> ${2:exampleProp1}: {${2:exampleProp1}}</h2>\n\t\t\t<h2> ${3:exampleProp2}: {${3:exampleProp2}}</h2>\n\t\t</div>\n\t)\n}\n\n${1:ComponentName}.propTypes = {\n\t${2:exampleProp1}: PropTypes.number.isRequired,\n\t${3:exampleProp2}: PropTypes.number\n}\n\nmodule.exports = ${1:ComponentName}\n'
