const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const cheerio = require('cheerio')

router.get('/api/v1/bill/', (req, res) => {
  fetch(req.headers.url)
    .then(res => res.text())
    .then(html => cheerio.load(html))
    .then($ => {
      let summary = ''
      $('#bill-summary > p').each((i, pTag) => {
        summary += $(pTag).text()
      })
      return summary
    })
    .then(summary => {
      if (summary) {
        res.json(summary)
      }
      res.json('A summary is in progress.')
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

module.exports = router
