import moment from 'moment'

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

sortBills.resolves = (p, cP, cR) => [
  { test: p[2] !== cP[2] && p[1] === cP[1], resolve: cR.reverse() }
]

export default sortBills
