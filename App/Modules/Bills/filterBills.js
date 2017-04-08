import { camelCase } from 'lodash'
import moment from 'moment'
import filterTopics from '../../Native/Navigation/DrawerContent/billFilters'

const filterBills = (allBills, options, search, myBills) => {
  if (!allBills.length) return allBills

  const statusFilteredBills = filterBillsByStatus(allBills, options)
  const myBillsFilteredBills = filterMyBills(statusFilteredBills, options.myBills, myBills)
  const topicFilteredBills = filterBillsByTopic(myBillsFilteredBills, options.filters)
  const searchFilteredBills = filterBillsBySearch(topicFilteredBills, search)
  const sortedBills = sortBills(searchFilteredBills, options.sortBy, options.sortOrder)

  return sortedBills
}

const filterBillsByStatus = (bills, options) => {
  const { active, tabled, failed, enacted } = options
  if (!(active || tabled || failed || enacted)) return bills

  let newBills = []

  bills.forEach(bill => {
    if (options[bill.status]) {
      newBills.push(bill)
    }
  })

  return newBills
}

const filterMyBills = (bills, shouldFilter, myBills) => !shouldFilter
  ? bills
  : bills.filter(bill => myBills.find(myBill => myBill === bill.billId))

const filterBillsByTopic = (bills, topics) => {
  if (!topics.length) return bills
  let newBills = []

  topics.forEach(topic => {
    const filter = filterTopics.find(filter => camelCase(filter.label) === topic)
    filter.topics.forEach(keyWord => {
      bills.forEach(bill => {
        if (bill.officialTitle.toLowerCase().includes(keyWord) &&
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
    return bill.officialTitle.toLowerCase().includes(search.toLowerCase())
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
        moment(billA.introducedOn).unix(),
        moment(billB.introducedOn).unix()
      ) ? -1 : 1
    ))
  }

  if (sortBy === 'lastAction') {
    newBills = bills.sort((billA, billB) => (
      compare(
        moment(billA.lastActionAt).unix(),
        moment(billB.lastActionAt).unix()
      ) ? -1 : 1
    ))
  }

  return newBills
}

export default filterBills
