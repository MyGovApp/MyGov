const cache = (callback, params, verbose) => {
  const deepEqual = (a, b) => a === JSON.stringify(b)

  let result

  if (callback.pureResolves) {
    callback.pureResolves(params).forEach((resolve, i) => {
      if (resolve.log) console.log('PureResolve log: ', resolve.log)
      if (resolve.test) {
        result = resolve.resolve
        if (verbose || cache.verbose) console.log(`returning pure resolve for ${callback.name}`)
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
          if (verbose || cache.verbose) console.log(`returning resolve for ${callback.name}`)
        }
      })
    }
    if (deepEqual(callback.cache.params, params)) {
      if (verbose || cache.verbose) console.log(`returning cached result for ${callback.name}`)
      result = callback.cache.result
    }
  }

  if (!result) {
    if (verbose || cache.verbose) console.log(`returning proccessed result for ${callback.name}`)
    result = callback(...params)
  }

  callback.cache = { params: JSON.stringify(params), result }
  return result
}

export default cache
