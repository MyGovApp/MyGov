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
${3:import { ${5:actionCreator} \\} from '${2}'}
import ${1:ExampleComponent} from './${1:ExampleComponent}.component'

${3:const mapDispatchToProps = {
  ${4:actionCreator}
}}

${5:const mapStateToProps = (state, ownProps) => ({
  ${6:exampleProp}: state.${1:ExampleComponent}.${6:exampleProp}
\\})}

export default connect(mapStateToProps, mapDispatchToProps)(${1:ExampleComponent})

// ------------------------------------
// GENERATED
// ------------------------------------
'import { connect } from \'react-redux\'\n${3:import { ${5:actionCreator} \\} from \'${2}\'}\nimport ${1:ExampleComponent} from \'./${1:ExampleComponent}.component.js\'\n\n${3:const mapDispatchToProps = {\n\t${4:actionCreator}\n}}\n\n${5:const mapStateToProps = (state, ownProps) => ({\n\t${6:exampleProp}: state.${1:ExampleComponent}.${6:exampleProp}\n})}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${1:ExampleComponent})\n'
