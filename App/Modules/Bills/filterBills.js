import { camelCase } from 'lodash'
import moment from 'moment'
import filterTopics from '../../Native/Navigation/DrawerContent/billFilters'

const filterBills = (allBills, options, search) => {
  if (!allBills.length) return allBills

  const statusFilteredBills = filterBillsByStatus(allBills, options)
  const topicFilteredBills = filterBillsByTopic(statusFilteredBills, options.filters)
  const searchFilteredBills = filterBillsBySearch(topicFilteredBills, search)
  const sortedBills = sortBills(searchFilteredBills, options.sortBy, options.sortOrder)

  return sortedBills
}

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const filterBillsByStatus = (bills, options) => {
  const { active, tabled, failed, enacted } = options
  const params = [ bills, active, tabled, failed, enacted ]

  if (!(active || tabled || failed || enacted)) return bills
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
  const params = [ bills, topics ]

  if (!topics.length) return bills
  if (deepEqual(params, filterBillsByTopic.cachedParams)) return filterBillsByTopic.cachedBills
  filterBillsByTopic.cachedParams = params

  let newBills = []

  topics.forEach(topic => {
    const filter = filterTopics.find(filter => camelCase(filter.label) === topic)
    filter.topics.forEach(keyWord => {
      bills.forEach(bill => {
        if (bill.official_title.toLowerCase().includes(keyWord) &&
        !newBills.find((existingBill) => bill === existingBill)) {
          newBills.push(bill)
        }
      })
    })
  })

  filterBillsByTopic.cachedBills = newBills
  return newBills
}

const filterBillsBySearch = (bills, search) => {
  const params = [ bills, search ]

  if (!search.length) return bills
  if (deepEqual(params, filterBillsBySearch.cachedParams)) return filterBillsBySearch.cachedBills
  filterBillsBySearch.cachedParams = params

  const newBills = bills.filter((bill) => bill.official_title.toLowerCase().includes(search.toLowerCase()))

  filterBillsBySearch.cachedBills = newBills
  return newBills
}

const sortBills = (bills, sortBy, sortOrder) => {
  const params = [ bills, sortBy, sortOrder ]
  const compare = (a, b) => sortOrder === 'acending' ? a < b : a > b

  if (deepEqual(params, sortBills.cachedParams)) return sortBills.cachedBills
  sortBills.cachedParams = params

  let newBills = bills

  if (sortBy === 'progress') {
    newBills = bills.sort((billA, billB) => (
      compare(billA.progress.index, billB.progress.index) ? -1 : 1
    ))
  }

  if (sortBy === 'introduced') {
    newBills = bills.sort((billA, billB) => (
      compare(moment(billA.introduced_on).unix(), moment(billB.introduced_on).unix()) ? -1 : 1
    ))
  }

  sortBills.cachedBills = newBills
  return newBills
}

export default filterBills
