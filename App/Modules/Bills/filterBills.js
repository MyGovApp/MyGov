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

  const extensions = [(p, cP, cR) => ({ test: p[2] !== cP[2] && p[1] === cP[1], resolve: cR.reverse() })]
  const sortedBills = cache(sortBills, [ searchFilteredBills, options.sortBy, options.sortOrder ], extensions)

  return sortedBills
}

const cache = (callback, params, extensions = []) => {
  const deepEqual = (a, b) => a === JSON.stringify(b)

  let resolve

  if (callback.cache) {
    extensions.forEach((extension, i) => {
      const obj = extension(params, JSON.parse(callback.cache.params), callback.cache.result)
      console.log('params[2] :  : ', params[2])
      console.log('callback.cache.params[2] :  : ', callback.cache.params[2])
      console.log('obj', obj)
      if (obj.test) {
        resolve = obj.resolve
        console.log(`returning resolve for ${callback.name}`)
      }
    })

    if (deepEqual(callback.cache.params, params)) {
      console.log(`rendering cached ${callback.name}`)
      resolve = callback.cache.result
    }
  }

  if (resolve) {
    return resolve
  }
  console.log(`rendering processed ${callback.name}`)
  const result = callback(...params)
  callback.cache = { params: JSON.stringify(params), result }
  return result
}

const filterBillsByStatus = (bills, stati) => {
  const { active, tabled, failed, enacted } = stati
  if (!(active || tabled || failed || enacted)) return bills

  let newBills = []

  bills.forEach(bill => {
    if (stati[bill.status]) {
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
