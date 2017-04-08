const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const cheerio = require('cheerio')

router.get('/api/v1/bill/', (req, res) => {
  fetch(req.headers.url)
    .then(res => res.text())
    .then(html => cheerio.load(html))
    .then($ => scrapeSummary($))
    .then(summary => {
      res.status(200).json(summary ? summary : 'A summary is in progress.') // eslint-disable-line
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

const scrapeSummary = ($) => {
  let summary = ''
  $('#bill-summary > p').each((i, pTag) => {
    summary += `${$(pTag).text()}

`
  })
  return summary
}

module.exports = router
