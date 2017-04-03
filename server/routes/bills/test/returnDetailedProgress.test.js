import { expect } from 'chai'
import returnDetailedStatus from '../returnDetailedStatus'

describe('returnDetailedStatus', () => {
  const stati = [ 'active', 'tabled' ]
  const progressIndexLength = 24
  const chambers = [ 'house', 'senate' ]

  it('should return all of the correct expected values', () => {
    stati.forEach(status => {
      for (var i = 0; i < progressIndexLength; i++) {
        chambers.forEach(chamber => {
          expect(returnDetailedStatus(status, { index: i, text: 'default to progress.text' }, chamber))
            .to.equal(expectedValues[`${status}|${i}|${chamber}`])
        })
      }
    })
  })
})

/* eslint-disable */
const expectedValues = {
  "active|0|house": "Pending House committee action",
  "active|0|senate": "Pending Senate committee action",
  "active|1|house": "Pending House action",
  "active|1|senate": "Pending Senate action",
  "active|2|house": "default to progress.text",
  "active|2|senate": "default to progress.text",
  "active|3|house": "Pending Senate action",
  "active|3|senate": "Pending House action",
  "active|4|house": "default to progress.text",
  "active|4|senate": "default to progress.text",
  "active|5|house": "Pending Senate cloture",
  "active|5|senate": "Pending House cloture",
  "active|6|house": "default to progress.text",
  "active|6|senate": "default to progress.text",
  "active|7|house": "Pending House and Senate action",
  "active|7|senate": "Pending Senate and House action",
  "active|8|house": "Pending Senate action",
  "active|8|senate": "Pending House action",
  "active|9|house": "Pending House action",
  "active|9|senate": "Pending Senate action",
  "active|10|house": "default to progress.text",
  "active|10|senate": "default to progress.text",
  "active|11|house": "default to progress.text",
  "active|11|senate": "default to progress.text",
  "active|12|house": "default to progress.text",
  "active|12|senate": "default to progress.text",
  "active|13|house": "default to progress.text",
  "active|13|senate": "default to progress.text",
  "active|14|house": "Pending president's signature",
  "active|14|senate": "Pending president's signature",
  "active|15|house": "Pending override by House and Senate",
  "active|15|senate": "Pending override by Senate and House",
  "active|16|house": "default to progress.text",
  "active|16|senate": "default to progress.text",
  "active|17|house": "Pending override by Senate",
  "active|17|senate": "Pending override by House",
  "active|18|house": "Pending override by House",
  "active|18|senate": "Pending override by Senate",
  "active|19|house": "default to progress.text",
  "active|19|senate": "default to progress.text",
  "active|20|house": "default to progress.text",
  "active|20|senate": "default to progress.text",
  "active|21|house": "default to progress.text",
  "active|21|senate": "default to progress.text",
  "active|22|house": "default to progress.text",
  "active|22|senate": "default to progress.text",
  "active|23|house": "default to progress.text",
  "active|23|senate": "default to progress.text",
  "tabled|0|house": "Tabled in House committee",
  "tabled|0|senate": "Tabled in Senate committee",
  "tabled|1|house": "Tabled in House",
  "tabled|1|senate": "Tabled in Senate",
  "tabled|2|house": "default to progress.text",
  "tabled|2|senate": "default to progress.text",
  "tabled|3|house": "Tabled in Senate",
  "tabled|3|senate": "Tabled in House",
  "tabled|4|house": "default to progress.text",
  "tabled|4|senate": "default to progress.text",
  "tabled|5|house": "Tabled in cloture by Senate",
  "tabled|5|senate": "Tabled in cloture by House",
  "tabled|6|house": "default to progress.text",
  "tabled|6|senate": "default to progress.text",
  "tabled|7|house": "Tabled by House and Senate",
  "tabled|7|senate": "Tabled by Senate and House",
  "tabled|8|house": "Tabled by Senate",
  "tabled|8|senate": "Tabled by House",
  "tabled|9|house": "Tabled by House",
  "tabled|9|senate": "Tabled by Senate",
  "tabled|10|house": "default to progress.text",
  "tabled|10|senate": "default to progress.text",
  "tabled|11|house": "default to progress.text",
  "tabled|11|senate": "default to progress.text",
  "tabled|12|house": "default to progress.text",
  "tabled|12|senate": "default to progress.text",
  "tabled|13|house": "default to progress.text",
  "tabled|13|senate": "default to progress.text",
  "tabled|14|house": "Tabled by House and Senate after presidential veto",
  "tabled|14|senate": "Tabled by Senate and House after presidential veto",
  "tabled|15|house": "Tabled by House and Senate after presidential veto",
  "tabled|15|senate": "Tabled by Senate and House after presidential veto",
  "tabled|16|house": "default to progress.text",
  "tabled|16|senate": "default to progress.text",
  "tabled|17|house": "Tabled by Senate after pedidential veto",
  "tabled|17|senate": "Tabled by House after pedidential veto",
  "tabled|18|house": "Tabled by House after pedidential veto",
  "tabled|18|senate": "Tabled by Senate after pedidential veto",
  "tabled|19|house": "default to progress.text",
  "tabled|19|senate": "default to progress.text",
  "tabled|20|house": "default to progress.text",
  "tabled|20|senate": "default to progress.text",
  "tabled|21|house": "default to progress.text",
  "tabled|21|senate": "default to progress.text",
  "tabled|22|house": "default to progress.text",
  "tabled|22|senate": "default to progress.text",
  "tabled|23|house": "default to progress.text",
  "tabled|23|senate": "default to progress.text"
}
