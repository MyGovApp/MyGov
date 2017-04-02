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

const filterBillsByStatus = (bills, options) => {
  let newBills = []

  bills.forEach(bill => {
    if (options[bill.status]) {
      newBills.push(bill)
    }
  })

  return newBills
}

const filterBillsByTopic = (bills, topics) => {
  if (!topics.length) return bills
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

  return newBills
}

const filterBillsBySearch = (bills, search) => {
  const newBills = bills.filter((bill) => {
    return bill.official_title.toLowerCase().includes(search.toLowerCase())
  })
  return newBills
}

const sortBills = (bills, sortBy, sortOrder) => {
  const compare = (a, b) => sortOrder === 'acending' ? a < b : a > b

  let newBills = bills

  if (sortBy === 'progress') {
    newBills = bills.sort((billA, billB) => (
      compare(billA.progress.index, billB.progress.index) ? -1 : 1
    ))
  }

  if (sortBy === 'introduced') {
    newBills = bills.sort((billA, billB) => (
      compare(
        moment(billA.introduced_on).unix(),
        moment(billB.introduced_on).unix()
      ) ? -1 : 1
    ))
  }

  return newBills
}

export default filterBills
