import moment from 'moment'

const progress = [

]

const returnProgress = (h, chamber) => {
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

  const hasBothOverrideResults = h.hasOwnProperty(`${primary}_override_result`) && h.hasOwnProperty(`${secondary}_override_result`)

  if (hasBothOverrideResults) {
    const passBoth = h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'pass'
    const failPrimaryPassSecondary = h[`${primary}_override_result`] === 'fail' && h[`${secondary}_override_result`] === 'pass'
    const passPrimaryFailSecondary = h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'fail'

    if (passBoth) return { index: 23, text: `Enacted, veto overridden by Congress` }
    if (failPrimaryPassSecondary) return { index: 22, text: `Passed override in ${Secondary}, failed override in ${Primary} after veto` }
    if (passPrimaryFailSecondary) return { index: 21, text: `Passed override in ${Primary}, failed override in ${Secondary} after veto` }
  }

  const hasSecondaryOverride = h.hasOwnProperty(`${secondary}_override_result`)

  if (hasSecondaryOverride) {
    const overrideFail = h[`${secondary}_override_result`] === 'fail'
    const overridePass = h[`${secondary}_override_result`] === 'pass'

    if (overrideFail) return { index: 20, text: `Failed override in ${Secondary} after veto` }
    if (overridePass) return { index: 18, text: `Passed override in ${Secondary} after veto` }
  }

  const hasPrimaryOverride = h.hasOwnProperty(`${primary}_override_result`)

  if (hasPrimaryOverride) {
    const overrideFail = h[`${primary}_override_result`] === 'fail'
    const overridePass = h[`${primary}_override_result`] === 'pass'

    if (overrideFail) return { index: 19, text: `Failed override in ${Primary} after veto` }
    if (overridePass) return { index: 17, text: `Passed override in ${Primary} after veto` }
  }

  const isEnacted = h.enacted === true
  if (isEnacted) return { index: 16, text: 'Enacted' }

  const isVetoed = h.vetoed === true
  if (isVetoed) return { index: 15, text: 'Vetoed' }

  if (h[`${secondary}_cloture_result`] === 'pass') {
    const bothAfterCloture = moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix() &&
      moment(h[`${secondary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix()

    if (bothAfterCloture) {
      const bothPass = h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'pass'
      const failPrimaryPassSecondary = h[`${primary}_passage_result`] === 'fail' && h[`${secondary}_passage_result`] === 'pass'
      const passPrimaryFailSecondary = h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'fail'

      if (bothPass) {
        const passDate = moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_passage_result_at`]).unix()
          ? moment(h[`${primary}_passage_result_at`]).unix()
          : moment(h[`${secondary}_passage_result_at`]).unix()
        const isAwaitingSignature = moment(passDate).add(8, 'days').unix() >= moment(Date.now()).unix()

        if (isAwaitingSignature) return { index: 14, text: `Passed both House and Senate after cloture` }
        else return { index: 16, text: `Enacted` }
      }

      if (failPrimaryPassSecondary) return { index: 13, text: `Passed in ${Secondary}, failed in ${Primary} after cloture` }
      if (passPrimaryFailSecondary) return { index: 12, text: `Passed in ${Primary}, failed in ${Secondary} after cloture` }
    }

    const primaryAfterCloture = moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix()

    if (primaryAfterCloture) {
      const passCloture = h[`${primary}_passage_result`] === 'pass'
      const failCloture = h[`${primary}_passage_result`] === 'fail'

      if (passCloture) return { index: 8, text: `Passed  in ${Primary} after cloture` }
      if (failCloture) return { index: 10, text: `Failed in ${Primary} after cloture` }
    }

    const secondaryAfterCloture = moment(h[`${secondary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix()

    if (secondaryAfterCloture) {
      const passCloture = h[`${secondary}_passage_result`] === 'pass'
      const failCloture = h[`${secondary}_passage_result`] === 'fail'

      if (passCloture) return { index: 9, text: `Passed in ${Secondary} after cloture` }
      if (failCloture) return { index: 11, text: `Failed in ${Secondary} after cloture` }
    }

    return { index: 7, text: 'Passed in cloture' }
  }

  const passCloture = h[`${secondary}_cloture_result`] === 'fail'
  const failCloture = h[`${secondary}_passage_result`] === 'pass'

  if (passCloture) return { index: 6, text: 'Failed in cloture' }
  if (failCloture) return { index: 5, text: `Passed in ${Secondary}` }

  const failSecondary = h[`${secondary}_passage_result`] === 'fail'

  if (failSecondary) return { index: 4, text: `Failed in ${Secondary}` }

  const passSecondary = h[`${primary}_passage_result`] === 'pass'

  if (passSecondary) return { index: 3, text: `Passed in ${Primary}` }

  const failPrimary = h[`${primary}_passage_result`] === 'fail'

  if (failPrimary) return { index: 2, text: `Failed in ${Primary}` }

  const isActive = h.active === true

  if (isActive) return { index: 1, text: `${Primary} has taken action` }

  return { index: 0, text: `Introduced in ${Primary}` }
}

module.exports = returnProgress
