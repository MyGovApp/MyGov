import { pick } from 'lodash'
import cache from '../../../Utilities/cache'

// It hard to tell if the caching is actually helping.
// Leaving the code here to optimize later work on later.
cache.verbose = false
cache.noCache = false

import {
  filterBillsByStatus,
  filterMyBills,
  filterBillsByTopic,
  filterBillsBySearch,
  sortBills } from './'

const filterBills = (allBills, options, search, myBills) => {
  const params = [ allBills, options, search, myBills ]

  const runMainLogic = (...params) => {
    const stati = pick(options, [ 'active', 'tabled', 'failed', 'enacted' ])

    const statusFilteredBills = cache(filterBillsByStatus, [ allBills, stati ])
    const myBillsFilteredBills = cache(filterMyBills, [ statusFilteredBills, options.myBills, myBills ])
    const topicFilteredBills = cache(filterBillsByTopic, [ myBillsFilteredBills, options.filters ])
    const searchFilteredBills = cache(filterBillsBySearch, [ topicFilteredBills, search ])
    const sortedBills = cache(sortBills, [ searchFilteredBills, options.sortBy, options.sortOrder ])

    return sortedBills
  }

  runMainLogic.pureResolves = (p) => [
    { test: !p[0], resolve: p[0] }
  ]

  return cache(runMainLogic, ...params)
}

export default filterBills
