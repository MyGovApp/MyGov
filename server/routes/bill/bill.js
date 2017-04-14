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
      const defaultResponse = {
        summaryText: 'A summary is in progress.',
        summaryHtml: '<p>A summary is in progress.</p>'
      }
      res.status(200).json(summary ? summary : defaultResponse) // eslint-disable-line
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

const scrapeSummary = ($) => {
  let summaryText = ''
  let summaryHtml = ''
  $('#bill-summary > p').each((i, pTag) => {
    summaryText += `${$(pTag).text()}

`
    summaryHtml += `${$(pTag)}`
  })

  return { summaryText, summaryHtml }
}

module.exports = router
