import { camelCase } from 'lodash'
import filterTopics from '../../Native/Navigation/DrawerContent/billFilters'

const filterBills = (allBills, options) => {
  if (!allBills.length) return allBills

  const topicFilteredBills = filterBillsByTopic(allBills, options.filters)
  const statusFilteredBills = filterBillsByStatus(topicFilteredBills, options)
  const sortedBills = sortBills(statusFilteredBills, options.sortBy, options.sortOrder)

  return sortedBills
}

const filterBillsByTopic = (allBills, topics) => {
  if (!topics.length) return allBills
  let topicFilteredBills = []

  topics.forEach(topic => {
    const filter = filterTopics.find(filter => camelCase(filter.label) === topic)
    filter.topics.forEach(keyWord => {
      allBills.forEach(bill => {
        if (bill.official_title.toLowerCase().includes(keyWord)) {
          topicFilteredBills.push(bill)
        }
      })
    })
  })

  return topicFilteredBills
}

const filterBillsByStatus = (topicFilteredBills, options) => {
  let statusFilteredBills = []

  topicFilteredBills.forEach(bill => {
    if (options[bill.status]) {
      statusFilteredBills.push(bill)
    }
  })

  return statusFilteredBills
}

const sortBills = (statusFilteredBills, sortBy, sortOrder) => {
  console.log('sortOrder', sortOrder)
  console.log("sortOrder === 'acending'", sortOrder === 'acending')
  const compare = (a, b) => {
    if (sortOrder === 'acending') {
      return a < b
    } else {
      return a > b
    }
  }

  if (sortBy === 'progress') {
    return statusFilteredBills.sort((billA, billB) => {
      if (compare(billA.progress.index, billB.progress.index)) {
        return -1
      } else {
        return 1
      }
    })
  }
}

export default filterBills
