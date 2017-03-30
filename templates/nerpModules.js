/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpModules'

// ------------------------------------
// OUTPUT
// ------------------------------------
import { handleAction, createReducer } from '../../Utilities/handleAction'

handleAction('ACTION_TYPE', (state, action) => ({}))

const initialState = {}

export default createReducer(initialState)


// ------------------------------------
// INPUT
// ------------------------------------
import { handleAction, createReducer } from '../../Utilities/handleAction'

handleAction('ACTION_TYPE', (state, action) => ({
}))

const initialState = {${1}}

export default createReducer(initialState)



// ------------------------------------
// GENERATED
// ------------------------------------
import { handleAction, createReducer } from \'../../Utilities/handleAction\'\n\nhandleAction(\'ACTION_TYPE\', (state, action) => ({\n}))\n\nconst initialState = {${1}}\n\nexport default createReducer(initialState)\n
