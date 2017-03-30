import { camelCase } from 'lodash'
import filterTopics from '../../Native/Navigation/DrawerContent/billFilters'

const filterBills = (allBills, options) => {
  if (!allBills.length) return allBills

  const topicFilteredBills = filterBillsByTopic(allBills, options.filters)
  const statusFilteredBills = filterBillsByStatus(topicFilteredBills, options)

  return statusFilteredBills
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

export default filterBills
