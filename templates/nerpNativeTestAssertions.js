/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpNativeTestAssertions'

// ------------------------------------
// OUTPUT
// ------------------------------------
import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper, ContainerWrapper } from './Example.setup'

describe('Native Example', () => {
  it('should render the Example component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the Example container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// ------------------------------------
// INPUT
// ------------------------------------
import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper${2:, ContainerWrapper} } from './${1:Example}.setup'

describe('Native ${1:Example}', () => {
  it('should render the ${1:Example} component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })

${2:  it('should render the ${1:Example} container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  \\})}
})


// ------------------------------------
// GENERATED
// ------------------------------------
import \'react-native\'\nimport React from \'react\' // eslint-disable-line\nimport renderer from \'react-test-renderer\'\nimport { ComponentWrapper${2:, ContainerWrapper} } from \'./${1:Example}.setup\'\n\ndescribe(\'Native ${1:Example}\', () => {\n\tit(\'should render the ${1:Example} component correctly\', () => {\n\t\tconst tree = renderer.create(ComponentWrapper()).toJSON()\n\t\texpect(tree).toMatchSnapshot()\n\t})\n\n${2:\tit(\'should render the ${1:Example} container correctly\', () => {\n\t\tconst tree = renderer.create(ContainerWrapper()).toJSON()\n\t\texpect(tree).toMatchSnapshot()\n\t\\})}\n})\n
