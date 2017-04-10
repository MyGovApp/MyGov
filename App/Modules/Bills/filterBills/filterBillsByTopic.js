import { camelCase } from 'lodash'
import filterTopics from '../../../Native/Navigation/DrawerContent/billFilters'

const filterBillsByTopic = (bills, topics) => {
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

filterBillsByTopic.pureResolves = (p) => [
  { test: !p[1].length, resolve: p[0] }
]

export default filterBillsByTopic
