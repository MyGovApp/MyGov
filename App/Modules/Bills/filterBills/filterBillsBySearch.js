const filterBillsBySearch = (bills, search) => {
  const newBills = bills.filter((bill) => {
    return bill.officialTitle.toLowerCase().includes(search.toLowerCase())
  })
  return newBills
}

export default filterBillsBySearch
