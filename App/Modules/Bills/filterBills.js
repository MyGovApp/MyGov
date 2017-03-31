import { camelCase } from 'lodash'
import moment from 'moment'
import filterTopics from '../../Native/Navigation/DrawerContent/billFilters'

const filterBills = (allBills, options) => {
  if (!allBills.length) return allBills

  const statusFilteredBills = filterBillsByStatus(allBills, options)
  const topicFilteredBills = filterBillsByTopic(statusFilteredBills, options.filters)
  const sortedBills = sortBills(topicFilteredBills, options.sortBy, options.sortOrder)

  return sortedBills
}

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const filterBillsByStatus = (bills, options) => {
  const params = [ options.active, options.tabled, options.failed, options.enacted ]
  if (deepEqual(filterBillsByStatus.cachedParams, params)) return filterBillsByStatus.cachedBills
  filterBillsByStatus.cachedParams = params

  let newBills = []

  bills.forEach(bill => {
    if (options[bill.status]) {
      newBills.push(bill)
    }
  })

  filterBillsByStatus.cachedBills = newBills
  return newBills
}

const filterBillsByTopic = (bills, topics) => {
  if (!topics.length) return bills
  let newBills = []

  topics.forEach(topic => {
    const filter = filterTopics.find(filter => camelCase(filter.label) === topic)
    filter.topics.forEach(keyWord => {
      bills.forEach(bill => {
        if (bill.official_title.toLowerCase().includes(keyWord)) {
          newBills.push(bill)
        }
      })
    })
  })

  return newBills
}

const sortBills = (bills, sortBy, sortOrder) => {
  const compare = (a, b) => sortOrder === 'acending' ? a < b : a > b

  if (sortBy === 'progress') {
    return bills.sort((billA, billB) => (
      compare(billA.progress.index, billB.progress.index) ? -1 : 1
    ))
  }

  if (sortBy === 'introduced') {
    return bills.sort((billA, billB) => (
      compare(moment(billA.introduced_on).unix(), moment(billB.introduced_on).unix()) ? -1 : 1
    ))
  }

  return bills
}

export default filterBills
