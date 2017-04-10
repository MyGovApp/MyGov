import { pick } from 'lodash'
import cache from '../../../Utilities/cache'

cache.verbose = true

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
