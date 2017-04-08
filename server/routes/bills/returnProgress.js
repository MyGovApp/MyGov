import moment from 'moment'

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

  const progress = {
    introduced: { index: 0, text: `Introduced in ${Primary}` },
    active: { index: 1, text: `${Primary} has taken action` },
    failPrimary: { index: 2, text: `Failed in ${Primary}` },
    passPrimary: { index: 3, text: `Passed in ${Primary}` },
    failSecondary: { index: 4, text: `Failed in ${Secondary}` },
    passSecondary: { index: 5, text: `Passed in ${Secondary}` },
    failCloture: { index: 6, text: 'Failed in cloture' },
    passCloture: { index: 7, text: 'Passed in cloture' },
    passPrimaryCloture:{ index: 8, text: `Passed  in ${Primary} after cloture` },
    passSecondaryCloture: { index: 9, text: `Passed in ${Secondary} after cloture` },
    failPrimaryCloture: { index: 10, text: `Failed in ${Primary} after cloture` },
    failSecondaryCloture: { index: 11, text: `Failed in ${Secondary} after cloture` },
    passPrimFailSec: { index: 12, text: `Passed in ${Primary}, failed in ${Secondary} after cloture` },
    passSecFailPrim: { index: 13, text: `Passed in ${Secondary}, failed in ${Primary} after cloture` },
    passBoth: { index: 14, text: `Passed both House and Senate after cloture` },
    vetoed: { index: 15, text: 'Vetoed' },
    enacted: { index: 16, text: `Enacted` },
    ovrPassPrimary: { index: 17, text: `Passed override in ${Primary} after veto` },
    ovrPassSecondary: { index: 18, text: `Passed override in ${Secondary} after veto` },
    ovrFailPrimary: { index: 19, text: `Failed override in ${Primary} after veto` },
    ovrFailSecondary: { index: 20, text: `Failed override in ${Secondary} after veto` },
    ovrPassPrimFailSec: { index: 21, text: `Passed override in ${Primary}, failed override in ${Secondary} after veto` },
    ovrPassSecFailPrim: { index: 22, text: `Passed override in ${Secondary}, failed override in ${Primary} after veto` },
    overridden: { index: 23, text: `Enacted, veto overridden by Congress` }
  }

  const passDate = moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_passage_result_at`]).unix()
    ? moment(h[`${primary}_passage_result_at`]).unix()
    : moment(h[`${secondary}_passage_result_at`]).unix()

  const c = {
    hasBothOverrideResults: h.hasOwnProperty(`${primary}_override_result`) && h.hasOwnProperty(`${secondary}_override_result`),
    bothPassOverride: h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'pass',
    failPrimaryPassSecondaryOverride: h[`${primary}_override_result`] === 'fail' && h[`${secondary}_override_result`] === 'pass',
    passPrimaryFailSecondaryOverride: h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'fail',
    hasSecondaryOverride: h.hasOwnProperty(`${secondary}_override_result`),
    secondaryOverrideFail: h[`${secondary}_override_result`] === 'fail',
    secondaryOverridePass: h[`${secondary}_override_result`] === 'pass',
    hasPrimaryOverride: h.hasOwnProperty(`${primary}_override_result`),
    primaryOverrideFail: h[`${primary}_override_result`] === 'fail',
    primaryOverridePass: h[`${primary}_override_result`] === 'pass',
    isEnacted: h.enacted === true,
    isVetoed: h.vetoed === true,
    passedCloture: h[`${secondary}_cloture_result`] === 'pass',
    bothAfterCloture: moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix() &&
      moment(h[`${secondary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix(),
    bothPass: h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'pass',
    failPrimaryPassSecondary: h[`${primary}_passage_result`] === 'fail' && h[`${secondary}_passage_result`] === 'pass',
    passPrimaryFailSecondary: h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'fail',
    isAwaitingSignature: moment(passDate).add(8, 'days').unix() >= moment(Date.now()).unix(),
    primaryAfterCloture: moment(h[`${primary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix(),
    secondaryAfterCloture: moment(h[`${secondary}_passage_result_at`]).unix() > moment(h[`${secondary}_cloture_result_at`]).unix(),
    primaryPassCloture: h[`${primary}_passage_result`] === 'pass',
    primaryFailCloture: h[`${primary}_passage_result`] === 'fail',
    passCloture: h[`${secondary}_passage_result`] === 'pass',
    failCloture: h[`${secondary}_passage_result`] === 'fail',
    secondaryPassCloture: h[`${secondary}_cloture_result`] === 'fail',
    secondaryFailCloture: h[`${secondary}_passage_result`] === 'pass',
    failSecondary: h[`${secondary}_passage_result`] === 'fail',
    passSecondary: h[`${primary}_passage_result`] === 'pass',
    failPrimary: h[`${primary}_passage_result`] === 'fail',
    isActive: h.active === true
  }

  if (c.hasBothOverrideResults) {
    if (c.bothPassOverride) return progress.overridden
    if (c.failPrimaryPassSecondaryOverride) return progress.ovrPassSecFailPrim
    if (c.passPrimaryFailSecondaryOverride) return progress.ovrPassPrimFailSec
  }

  if (c.hasSecondaryOverride) {
    if (c.secondaryOverrideFail) return progress.ovrFailSecondary
    if (c.secondaryOverridePass) return progress.ovrPassSecondary
  }

  if (c.hasPrimaryOverride) {
    if (c.primaryOverrideFail) return progress.ovrFailPrimary
    if (c.primaryOverridePass) return progress.ovrPassPrimary
  }

  if (c.isEnacted) return progress.enacted
  if (c.isVetoed) return progress.vetoed

  if (c.passedCloture) {
    if (c.bothAfterCloture) {
      if (c.bothPass) {
        if (c.isAwaitingSignature) return progress.passBoth
        else return progress.enacted
      }

      if (c.failPrimaryPassSecondary) return progress.passSecFailPrim
      if (c.passPrimaryFailSecondary) return progress.passPrimFailSec
    }

    if (c.primaryAfterCloture) {
      if (c.primaryPassCloture) return progress.passPrimaryCloture
      if (c.primaryFailCloture) return progress.failPrimaryCloture
    }

    if (c.secondaryAfterCloture) {
      if (c.passCloture) return progress.passSecondaryCloture
      if (c.failCloture) return progress.failSecondaryCloture
    }

    return progress.passCloture
  }

  if (c.secondaryPassCloture) return progress.failCloture
  if (c.secondaryFailCloture) return progress.passSecondary
  if (c.failSecondary) return progress.failSecondary
  if (c.passSecondary) return progress.passPrimary
  if (c.failPrimary) return progress.failPrimary
  if (c.isActive) return progress.active

  return progress.introduced
}

module.exports = returnProgress
