const moment = require('moment')

// ------------------------------------
// Progress Structure
// ------------------------------------
//
// { index: 0, text: `Introduced in ${Primary}` }
// { index: 1, text: `${Primary} has taken action` }
// { index: 2, text: `Failed in ${Primary}` }
// { index: 3, text: `Passed in ${Primary}` }
// { index: 4, text: `Failed in ${Secondary}` }
// { index: 5, text: `Passed in ${Secondary}` }
// { index: 6, text: `Failed in cloture` }
// { index: 7, text: `Passed in cloture` }
// { index: 8, text: `Passed  in ${Primary} after cloture` }
// { index: 9, text: `Passed in ${Secondary} after cloture` }
// { index: 10, text: `Failed in ${Primary} after cloture` }
// { index: 11, text: `Failed in ${Secondary} after cloture` }
// { index: 12, text: `Passed in ${Primary}, failed in ${Secondary} after cloture` }
// { index: 13, text: `Passed in ${Secondary}, failed in ${Primary} after cloture` }
// { index: 14, text: `Passed both House and Senate after cloture` }
// { index: 15, text: `Vetoed` }
// { index: 16, text: `Enacted` }
// { index: 17, text: `Passed override in ${Primary} after veto` }
// { index: 18, text: `Passed override in ${Secondary} after veto` }
// { index: 19, text: `Failed override in ${Primary} after veto` }
// { index: 20, text: `Failed override in ${Secondary} after veto` }
// { index: 21, text: `Passed override in ${Primary}, failed override in ${Secondary} after veto` }
// { index: 22, text: `Passed override in ${Secondary}, failed override in ${Primary} after veto` }
// { index: 23, text: `Enacted, veto overridden by Congress` }

const returnProgress = (h, chamber) => {
  // it('Should set primary to the chamber passed in and secondary to the alterative chamber')
  let primary, secondary, Primary, Secondary
  if (chamber === 'house') {
    primary = 'house'
    secondary = 'senate'
    Primary = 'House'
    Secondary = 'Senate'
  } else {
    primary = 'senate'
    secondary = 'house'
    Primary = 'Senate'
    Secondary = 'House'
  }

  // it('should return index 23 if history has passing override results from both chambers')
  if (h.hasOwnProperty(`${primary}_override_result`) && h.hasOwnProperty(`${secondary}_override_result`)) {
    if (h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'pass') {
      return { index: 23, text: `Enacted, veto overridden by Congress` }
    }

    // it('should return index 22 if the history has a passing override from the secondary chamber and fail from the primary')
    if (h[`${primary}_override_result`] === 'fail' && h[`${secondary}_override_result`] === 'pass') {
      return { index: 22, text: `Passed override in ${Secondary}, failed override in ${Primary} after veto` }
    }

    // it('should return index 21 if the history has a passing override from the primary chamber and fail from secondary')
    if (h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'fail') {
      return { index: 21, text: `Passed override in ${Primary}, failed override in ${Secondary} after veto` }
    }
  }

  // it('should return index 20 if the hisory has a failing override result from the secondary and no override result from the primary')
  if (h.hasOwnProperty(`${secondary}_override_result`)) {
    if (h[`${secondary}_override_result`] === 'fail') {
      return { index: 20, text: `Failed override in ${Secondary} after veto` }
    }

    // it('should return index 18 if the history has a passing override result from the secondary and no override from the primary')
    if (h[`${secondary}_override_result`] === 'pass') {
      return { index: 18, text: `Passed override in ${Secondary} after veto` }
    }
  }

  // it('should return index 19 if the history has a failing override resutl from the primary and no override result from the secondary')
  if (h.hasOwnProperty(`${primary}_override_result`)) {
    if (h[`${primary}_override_result`] === 'fail') {
      return { index: 19, text: `Failed override in ${Primary} after veto` }
    }

    // it('should return index 17 if the history has a passing override result from the primary and no override from the secondary')
    if (h[`${primary}_override_result`] === 'pass') {
      return { index: 17, text: `Passed override in ${Primary} after veto` }
    }
  }

  // it('should return index 16 if history.enacted === true')
  if (h.enacted === true) return { index: 16, text: 'Enacted' }

  // it('should retun index 15 if history.vetoed === true and there are no override results')
  if (h.vetoed === true) return { index: 15, text: 'Vetoed' }

  if (h[`${secondary}_cloture_result`] === 'pass') {
    // ensure that passage results are after cloture and not previous passage reults
    if (moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix() &&
        moment(h[`${secondary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix()) {
      if (h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'pass') {
        // determine the date that the second chamber passed the cloture bill
        const passDate = moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_passage_result_at`]).unix()
          ? moment(h[`${primary}_passage_result_at`]).unix()
          : moment(h[`${secondary}_passage_result_at`]).unix()

        // the president has eight days to sign or veto a bill before the law is ushered in
        // note: the edge case of a pocket veto is not built into this logic
        if (moment(passDate).add(8, 'days').unix() >= moment(Date.now()).unix()) {
          // it('should return index 14 if history has a passing cloture result preceeded by passing reults from both chambers and less than eight days have passed since most recent passage result')
          return { index: 14, text: `Passed both House and Senate after cloture` }
        } else {
          // it('should return index 16 if history has a passing cloture result preceeded by passing reults from both chambers and more than eight days have passed since most recent passage result')
          return { index: 16, text: `Enacted` }
        }
      }

      // it('should return index 13 if history has a passing cloture result preceeded by a pass in the seconday and a fail in the primary')
      if (h[`${primary}_passage_result`] === 'fail' && h[`${secondary}_passage_result`] === 'pass') {
        return { index: 13, text: `Passed in ${Secondary}, failed in ${Primary} after cloture` }
      }

      // it('should return index 12 if history has a passing cloture result preceeded by a fail in the seconday and a pass in the primary')
      if (h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'fail') {
        return { index: 12, text: `Passed in ${Primary}, failed in ${Secondary} after cloture` }
      }
    }

    if (moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix()) {
      // it('should return index 8 if history has a passing cloture result, the passage date of secondary is before primary, and the primary passage result is pass')
      if (h[`${primary}_passage_result`] === 'pass') {
        return { index: 8, text: `Passed  in ${Primary} after cloture` }
      }

      // it('should return index 10 if history has a passing cloture result, the passage date of secondary is before primary, and the primary passage result is fail')
      if (h[`${primary}_passage_result`] === 'fail') {
        return { index: 10, text: `Failed in ${Primary} after cloture` }
      }
    }

    if (moment(h[`${secondary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix()) {
      // it('should return index 9 if history has a passing cloture result, the passage date of secondary is after primary, and the secondary passage result is pass')
      if (h[`${secondary}_passage_result`] === 'pass') {
        return { index: 9, text: `Passed in ${Secondary} after cloture` }
      }

      // it('should return index 11 if history has a passing cloture result, the passage date of secondary is after primary, and the secondary passage result is fail')
      if (h[`${secondary}_passage_result`] === 'fail') {
        return { index: 11, text: `Failed in ${Secondary} after cloture` }
      }
    }
    // it('should return index 7 if the history has a passing cloture result and all other pasage results are before the cloture')
    return { index: 7, text: 'Passed in cloture' }
  } // end cloture === pass

  // it('should return index 6 if the cloture result === fail')
  if (h[`${secondary}_cloture_result`] === 'fail') {
    return { index: 6, text: 'Failed in cloture' }
  }

  // it('should return index 5 if the secondary passage result === pass and there is no cloture result')
  if (h[`${secondary}_passage_result`] === 'pass') {
    return { index: 5, text: `Passed in ${Secondary}` }
  }

  // it('should return index 4 if the secondary passage result === fail and there is no cloture result')
  if (h[`${secondary}_passage_result`] === 'fail') {
    return { index: 4, text: `Failed in ${Secondary}` }
  }

  // it('should return index 3 if the primary passage result === pass and there is no cloture result')
  if (h[`${primary}_passage_result`] === 'pass') {
    return { index: 3, text: `Passed in ${Primary}` }
  }

  // it('should return index 2 if the primary passage result === fail and there is no cloture result')
  if (h[`${primary}_passage_result`] === 'fail') {
    return { index: 2, text: `Failed in ${Primary}` }
  }

  // it('should return index 1 if history.active === true')
  if (h.active === true) {
    return { index: 1, text: `${Primary} has taken action` }
  }

  // it('should return index 0 if history.active === false')
  return { index: 0, text: `Introduced in ${Primary}` }
}

module.exports = returnProgress
