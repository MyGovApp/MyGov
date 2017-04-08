const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const returnDetailedStatus = require('./returnDetailedStatus')
const returnProgress = require('./returnProgress')
const returnStatus = require('./returnStatus')

router.get('/api/v1/bills/', (req, res) => {
  res.status(200).json(allBills)
})

let billsPage = 1
let allBills = []

const getAllBills = () => {
  fetch(`https://congress.api.sunlightfoundation.com/bills?congress=115&per_page=50&page=${billsPage}`)
    .then(response => response.json())
    .then(billsAll => structureResponse(billsAll))
    .then(billsPruned => addToAllBills(billsPruned))
    .catch(err => console.log(err))
}

const structureResponse = (billsAll) => (
  billsAll.results.reduce((billsPruned, bill) => {
    billsPruned.push(Object.assign({},
      trimResults(bill),
      additionalData(bill.history, bill.chamber, bill.lastActionAt)
    ))

    return billsPruned
  }, [])
)

const trimResults = (bill) => ({
  officialTitle: bill.official_title,
  billId: bill.bill_id,
  introducedOn: bill.introduced_on,
  lastActionAt: bill.last_action_at,
  chamber: bill.chamber,
  history: bill.history,
  sponsor: bill.sponsor,
  urls: bill.urls
})

const additionalData = (history, chamber, lastAction) => {
  const status = returnStatus(history, lastAction)
  const progress = returnProgress(history, chamber)

  return {
    status,
    progress,
    detailedStatus: returnDetailedStatus(status, progress, chamber)
  }
}

const addToAllBills = (billsPruned) => {
  console.log(`receiving bills ${billsPage * 50} - ${(billsPage - 1) * 50}`)
  allBills = [ ...allBills, ...billsPruned ]
  if (billsPruned.length === 50) {
    billsPage++
    getAllBills()
  } else {
    billsPage = 1
    console.log('done fetching all bills')
  }
}

// get all bills and refresh list every 12 hours
getAllBills()
setInterval(() => {
  allBills = []
  getAllBills()
}, 1000 * 60 * 60 * 12)

module.exports = router
