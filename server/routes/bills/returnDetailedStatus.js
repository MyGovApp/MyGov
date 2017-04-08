const returnDetailedStatus = (status, progress, chamber) => {
  let primary, secondary
  if (chamber === 'house') {
    primary = 'House'
    secondary = 'Senate'
  } else {
    primary = 'Senate'
    secondary = 'House'
  }

  switch (progress.index) {
    case 0: // `Introduced in ${Primary}`
      if (status === 'active') return `Pending ${primary} committee action`
      if (status === 'tabled') return `Tabled in ${primary} committee`
      break

    case 1: // `${Primary} has taken action`
      if (status === 'active') return `Pending ${primary} action`
      if (status === 'tabled') return `Tabled in ${primary}`
      break

    case 3: // `Passed in ${Primary}`
      if (status === 'active') return `Pending ${secondary} action`
      if (status === 'tabled') return `Tabled in ${secondary}`
      break

    case 5: // `Passed in ${Secondary}`
      if (status === 'active') return `Pending ${secondary} cloture`
      if (status === 'tabled') return `Tabled in cloture by ${secondary}`
      break

    case 7: // `Passed in cloture`
      if (status === 'active') return `Pending ${primary} and ${secondary} action`
      if (status === 'tabled') return `Tabled by ${primary} and ${secondary}`
      break

    case 8: // `Passed  in ${Primary} after cloture`
      if (status === 'active') return `Pending ${secondary} action`
      if (status === 'tabled') return `Tabled by ${secondary}`
      break

    case 9: // `Passed in ${Secondary} after cloture`
      if (status === 'active') return `Pending ${primary} action`
      if (status === 'tabled') return `Tabled by ${primary}`
      break

    case 14: // `Passed both House and Senate after cloture`
      if (status === 'active') return `Pending president's signature`
      break

    case 15: // `Vetoed`
      if (status === 'active') return `Pending override by ${primary} and ${secondary}`
      if (status === 'tabled') return `Tabled by ${primary} and ${secondary} after presidential veto`
      break

    case 17: // `Passed override in ${Primary} after veto`
      if (status === 'active') return `Pending override by ${secondary}`
      if (status === 'tabled') return `Tabled by ${secondary} after pedidential veto`
      break

    case 18: // `Passed override in ${Secondary} after veto`
      if (status === 'active') return `Pending override by ${primary}`
      if (status === 'tabled') return `Tabled by ${primary} after pedidential veto`
      break

    default:
      return progress.text
  }
}

module.exports = returnDetailedStatus
