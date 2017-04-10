const cache = (callback, params) => {
  const startTime = Date.now()

  let result
  let resultType

  if (!cache.noCache) {
    const deepEqual = (a, b) => a === JSON.stringify(b)
    if (callback.pureResolves) {
      callback.pureResolves(params).forEach((resolve, i) => {
        if (resolve.log) console.log('PureResolve log: ', resolve.log)
        if (resolve.test) {
          result = resolve.resolve
          resultType = 'pureResolve'
        }
      })
    }

    if (callback.cache) {
      if (callback.resolves) {
        callback.resolves(params, JSON.parse(callback.cache.params), callback.cache.result)
        .forEach((resolve, i) => {
          if (resolve.log) console.log('Resolve log: ', resolve.log)
          if (resolve.test) {
            result = resolve.resolve
            resultType = 'resolve'
          }
        })
      }
      if (deepEqual(callback.cache.params, params)) {
        result = callback.cache.result
        resultType = 'cache'
      }
    }
    if (!result) {
      result = callback(...params)
      resultType = 'processed'
    }

    callback.cache = { params: JSON.stringify(params), result }
  } else {
    resultType = 'noCache'
    result = callback(...params)
  }

  if (cache.verbose) {
    const funcTime = Date.now() - startTime
    if (resultType === 'noCache') console.log(`${funcTime}ms | noCache ${callback.name}`)
    if (resultType === 'pureResolve') console.log(`%c ${funcTime}ms | returning pure resolve for ${callback.name}`, 'color: #B8E986')
    if (resultType === 'resolve') console.log(`%c ${funcTime}ms | returning resolve for ${callback.name}`, 'color: #3d8de7')
    if (resultType === 'cache') console.log(`%c ${funcTime}ms | returning cached result for ${callback.name}`, 'color: #3dbde7')
    if (resultType === 'processed') console.log(`%c ${funcTime}ms | returning proccessed result for ${callback.name}`, 'color: #FFD1D1')
  }

  return result
}

export default cache
