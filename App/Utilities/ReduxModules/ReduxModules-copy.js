const m = new (class ReduxModules {
  constructor () {
    this.actionHandlers = {}
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

  createReducer (initialState) {
    return (state = initialState, action) => {
      if (!action) return state
      const handler = this.actionHandlers[action.type]
      return handler ? handler(state, action) : state
    }
  }
})()

module.exports = {
  handleAction: m.handleAction,
  createReducer: m.createReducer
}
