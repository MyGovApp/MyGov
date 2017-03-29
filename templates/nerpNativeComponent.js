/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpNativeComponent'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './ComponentName.styles'

class ComponentName extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

ComponentName.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ComponentName

// ------------------------------------
// INPUT
// ------------------------------------
import React, { Component, PropTypes } from 'react'
import { ${2:Text, TouchableOpacity} } from 'react-native'
import styles from './${1:ComponentName}.styles'

class ${1:ComponentName} extends Component {
  render () {
    return (
      ${3:<TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>}
    )
  }
}

${1:ComponentName}.propTypes = {
  ${4:onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired}
}

export default ${1:ComponentName}

// ------------------------------------
// GENERATED
// ------------------------------------
import React, { Component, PropTypes } from \'react\'\nimport { ${2:Text, TouchableOpacity} } from \'react-native\'\nimport styles from \'./${1:ComponentName}.styles\'\n\nclass ${1:ComponentName} extends Component {\n\trender () {\n\t\treturn (\n\t\t\t${3:<TouchableOpacity onPress={this.props.onPress}>\n\t\t\t\t<Text style={styles.text}>{this.props.text}</Text>\n\t\t\t</TouchableOpacity>}\n\t\t)\n\t}\n}\n\n${1:ComponentName}.propTypes = {\n\t${4:onPress: PropTypes.func.isRequired,\n\ttext: PropTypes.string.isRequired}\n}\n\nexport default ${1:ComponentName}\n\n

// ------------------------------------
// Additional engineering needed
// ------------------------------------
import React, { Component, PropTypes } from \'react\'\nimport { ${2:Text, TouchableOpacity} } from \'react-native\'\nimport styles from \'./${1:ComponentName}.styles\'\n\nclass ${1:ComponentName} extends Component {\n\trender () {\n\t\treturn (\n\t\t\t${3:<TouchableOpacity onPress={this.props.onPress\\}>\n\t\t\t\t<Text style={styles.text\\}>{this.props.text\\}</Text>\n\t\t\t</TouchableOpacity>}\n\t\t)\n\t}\n}\n\n${1:ComponentName}.propTypes = {\n\t${4:onPress: PropTypes.func.isRequired,\n\ttext: PropTypes.string.isRequired}\n}\n\nexport default ${1:ComponentName}\n\n
