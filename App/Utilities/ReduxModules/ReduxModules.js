export default class ReduxModules {
  constructor () {
    this.actionHandlers = {}
    this.initialState = {}
  }

  handleAction (ACTION_TYPE, stateChanges) {
    this.actionHandlers = {
      ...this.actionHandlers,
      [ACTION_TYPE]: (state, action) => ({
        ...state,
        ...stateChanges(state, action)
      })
    }
  }

  createReducer () {
    return (state = this.initialState, action) => {
      const handler = this.actionHandlers[action.type]
      return handler ? handler(state, action) : state
    }
  }
}
