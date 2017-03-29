/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpReduxContainer'

// ------------------------------------
// OUTPUT
// ------------------------------------
import { connect } from 'react-redux'
import { actionCreator } from './ExampleComponent.modules.js'
import ExampleComponent from './ExampleComponent.component.js'

const mapDispatchToProps = {
  actionCreator
}

const mapStateToProps = (state, ownProps) => ({
  exampleProp: state.ExampleComponent.exampleProp
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent)

// ------------------------------------
// INPUT
// ------------------------------------
import { connect } from 'react-redux'
${2:import { ${4:actionCreator} } from './${1:ExampleComponent}.modules.js'}
import ${1:ExampleComponent} from './${1:ExampleComponent}.component.js'

${2:const mapDispatchToProps = {
  ${4:actionCreator}
}}

${3:const mapStateToProps = (state, ownProps) => ({
  ${5:exampleProp}: state.${1:ExampleComponent}.${5:exampleProp}
})}

export default connect(mapStateToProps, mapDispatchToProps)(${1:ExampleComponent})

// ------------------------------------
// GENERATED
// ------------------------------------
'import { connect } from \'react-redux\'\n${2:import { ${4:actionCreator} \\} from \'./${1:ExampleComponent}.modules.js\'}\nimport ${1:ExampleComponent} from \'./${1:ExampleComponent}.component.js\'\n\n${2:const mapDispatchToProps = {\n\t${4:actionCreator}\n\\}}\n\n${3:const mapStateToProps = (state, ownProps) => ({\n\t${5:exampleProp}: state.${1:ExampleComponent}.${5:exampleProp}\n\\})}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${1:ExampleComponent})\n'
