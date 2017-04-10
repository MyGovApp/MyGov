import { pick } from 'lodash'
import cache from '../../../Utilities/cache'

import {
  filterBillsByStatus,
  filterMyBills,
  filterBillsByTopic,
  filterBillsBySearch,
  sortBills } from './'

const filterBills = (allBills, options, search, myBills) => {
  if (!allBills.length) return allBills

  const stati = pick(options, [ 'active', 'tabled', 'failed', 'enacted' ])

  const statusFilteredBills = cache(filterBillsByStatus, [ allBills, stati ])
  const myBillsFilteredBills = cache(filterMyBills, [ statusFilteredBills, options.myBills, myBills ])
  const topicFilteredBills = cache(filterBillsByTopic, [ myBillsFilteredBills, options.filters ])
  const searchFilteredBills = cache(filterBillsBySearch, [ topicFilteredBills, search ])
  const sortedBills = cache(sortBills, [ searchFilteredBills, options.sortBy, options.sortOrder ])

  return sortedBills
}

export default filterBills
