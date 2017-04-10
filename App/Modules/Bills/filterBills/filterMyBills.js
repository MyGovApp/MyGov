const filterMyBills = (bills, shouldFilter, myBills) => !shouldFilter
  ? bills
  : bills.filter(bill => myBills.find(myBill => myBill === bill.billId))

filterMyBills.pureResolves = (p) => [
  { test: !p[1], resolve: p[0] }
]

export default filterMyBills
