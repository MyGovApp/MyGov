const filterBillsBySearch = (bills, search) => {
  const newBills = bills.filter((bill) => {
    return bill.officialTitle.toLowerCase().includes(search.toLowerCase())
  })
  return newBills
}

filterBillsBySearch.pureResolves = (p) => [
  { test: !p[1].trim(), resolve: p[0] }
]

export default filterBillsBySearch
