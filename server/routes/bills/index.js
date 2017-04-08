const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const moment = require('moment')
const returnDetailedStatus = require('./returnDetailedStatus')
const returnProgress = require('./returnProgress')

let billsPage = 1
let allBills = []

const getAllBills = () => {
  fetch(`https://congress.api.sunlightfoundation.com/bills?congress=115&per_page=50&page=${billsPage}`)
    .then(response => response.json())
    .then(billsAll => billsAll.results.reduce((billsPruned, bill) => {
      billsPruned.push(Object.assign({},
        {
          officialTitle: bill.official_title,
          billId: bill.bill_id,
          introducedOn: bill.introduced_on,
          lastActionAt: bill.last_action_at,
          chamber: bill.chamber,
          history: bill.history,
          sponsor: bill.sponsor,
          urls: bill.urls
        },
        additionalData(bill.history, bill.chamber, bill.lastActionAt)
      ))
      return billsPruned
    }, []))
    .then(billsPruned => {
      allBills = [ ...allBills, ...billsPruned ]
      if (billsPruned.length === 50) {
        billsPage++
        getAllBills()
      } else {
        billsPage = 1
        console.log('done fetching all bills')
      }
    })
    .catch(err => console.log(err))
}

const additionalData = (history, chamber, lastAction) => {
  const status = returnStatus(history, lastAction)
  const progress = returnProgress(history, chamber)

  return {
    status,
    progress,
    detailedStatus: returnDetailedStatus(status, progress, chamber)
  }
}

const objValues = (obj) => {
  return Object.keys(obj).map((key) => {
    return obj[key]
  })
}

const returnStatus = (history, lastAction) => {
  if (history.enacted) return 'enacted'
  if (objValues(history).find((result) => result === 'fail')) return 'failed'
  if (moment(lastAction).add(4, 'months') > moment(Date.now()) && history.active === true) return 'active'
  return 'tabled'
}

router.get('/api/v1/bills/', (req, res) => {
  res.json(allBills)
})

getAllBills()
// refresh bills list every 12 hours
setInterval(() => { getAllBills() }, 1000 * 60 * 60 * 12)

module.exports = router
