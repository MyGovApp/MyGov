import { camelCase, pick } from 'lodash'
import moment from 'moment'
import filterTopics from '../../Native/Navigation/DrawerContent/billFilters'

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

const cache = (callback, params) => {
  const deepEqual = (a, b) => a === JSON.stringify(b)

  let result

  if (callback.pureResolves) {
    console.log('checking pure resolves')
    callback.pureResolves(params).forEach((resolve, i) => {
      if (resolve.log) console.log('PureResolve log: ', resolve.log)
      if (resolve.test) {
        result = resolve.resolve
        console.log(`returning pure resolve for ${callback.name}`)
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
          console.log(`returning resolve for ${callback.name}`)
        }
      })
    }
    if (deepEqual(callback.cache.params, params)) {
      console.log(`rendering cached ${callback.name}`)
      result = callback.cache.result
    }
  }

  if (!result) {
    console.log(`rendering proccessed ${callback.name}`)
    result = callback(...params)
  }

  callback.cache = { params: JSON.stringify(params), result }
  return result
}

const filterBillsByStatus = (bills, stati) => {
  let newBills = []

  bills.forEach(bill => {
    if (stati[bill.status]) {
      newBills.push(bill)
    }
  })

  return newBills
}

filterBillsByStatus.resolves = (p, cP, cR) => [
  { test: !p[1].active && !p[1].tabled && !p[1].failed && !p[1].enacted, resolve: p[0] }
]

const filterMyBills = (bills, shouldFilter, myBills) =>
  bills.filter(bill => myBills.find(myBill => myBill === bill.billId))

filterMyBills.pureResolves = (p) => [
  { test: !p[1], resolve: p[0] }
]

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

sortBills.resolves = (p, cP, cR) => [
  { test: p[2] !== cP[2] && p[1] === cP[1], resolve: cR.reverse() }
]

export default filterBills
