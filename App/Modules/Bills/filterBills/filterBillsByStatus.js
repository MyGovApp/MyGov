const filterBillsByStatus = (bills, stati) => {
  let newBills = []

  bills.forEach(bill => {
    if (stati[bill.status]) {
      newBills.push(bill)
    }
  })

  return newBills
}

filterBillsByStatus.resolves = (p, cP, cR) => [
  { test: !p[1].active && !p[1].tabled && !p[1].failed && !p[1].enacted, resolve: p[0] }
]

export default filterBillsByStatus
