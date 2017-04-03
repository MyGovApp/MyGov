import ReduxModules from './ReduxModules'
const m = new ReduxModules()

describe('handleAction Utility', () => {
  it('should correctly return the defined initial state', () => {
    m.initialState = { test: 'initialState' }

    expect(m.createReducer()()).toEqual({ test: 'initialState' })
  })

  it('should add new values to the state tree, if they did not previously exist', () => {
    m.handleAction('SAMPLE_ACTION', (state, action) => ({
      sampleStateChange: 'sample value'
    }))

    const currentState = { test: 'initialState' }
    const expectedState = {
      sampleStateChange: 'sample value',
      test: 'initialState'
    }

    expect(m.createReducer()(currentState, { type: 'SAMPLE_ACTION' }))
    .toEqual(expectedState)
  })

  it('should patch values in the state tree, if they did previously exist', () => {
    m.handleAction('SAMPLE_ACTION', (state, action) => ({
      sampleStateChange: 'new sample value'
    }))

    const currentState = { sampleStateChange: 'sample value' }

    expect(m.createReducer()(currentState, { type: 'SAMPLE_ACTION' }))
    .toEqual({ sampleStateChange: 'new sample value' })
  })
})
