import { expect } from 'chai'
import returnProgress from '../returnProgress'

const fullBillHistory = { // eslint-disable-line
  'history': {
    'active': true,
    'active_at': '2009-10-07T18:35:00Z',
    'house_passage_result': 'pass',
    'house_passage_result_at': '2010-03-22T02:48:00Z',
    'senate_cloture_result': 'pass',
    'senate_cloture_result_at': '2009-12-23',
    'senate_passage_result': 'pass',
    'senate_passage_result_at': '2009-12-24',
    'vetoed': false,
    'awaiting_signature': false,
    'enacted': true,
    'enacted_at': '2010-03-23'
  }
}

describe('returnProgress', () => {
  const primary = 'house'
  const secondary = 'senate'

  it('should return index 23 if history has passing override results from both chambers', () => {
    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-01',
      [`${primary}_override_result`]: 'fail',
      [`${primary}_override_result_at`]: '2017-03-02'
    }

    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-01',
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(23)
    expect(returnProgress(historyFail, primary).index).to.not.equal(23)
  })

  it('should return index 22 if the history has a passing override from the secondary chamber and fail from the primary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-01',
      [`${primary}_override_result`]: 'fail',
      [`${primary}_override_result_at`]: '2017-03-02'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-01',
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(22)
    expect(returnProgress(historyFail, primary).index).to.not.equal(22)
  })

  it('should return index 21 if the history has a passing override from the primary chamber and fail from secondary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-01',
      [`${secondary}_override_result`]: 'fail',
      [`${secondary}_override_result_at`]: '2017-03-02'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-01',
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(21)
    expect(returnProgress(historyFail, primary).index).to.not.equal(21)
  })

  it('should return index 20 if the hisory has a failing override result from the secondary and no override result from the primary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'fail',
      [`${secondary}_override_result_at`]: '2017-03-01'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'fail',
      [`${secondary}_override_result_at`]: '2017-03-01',
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(20)
    expect(returnProgress(historyFail, primary).index).to.not.equal(20)
  })

  it('should return index 19 if the history has a failing override resutl from the primary and no override result from the secondary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'fail',
      [`${primary}_override_result_at`]: '2017-03-01'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'fail',
      [`${primary}_override_result_at`]: '2017-03-01',
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(19)
    expect(returnProgress(historyFail, primary).index).to.not.equal(19)
  })

  it('should return index 18 if the history has a passing override result from the secondary and no override from the primary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-01'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-01',
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(18)
    expect(returnProgress(historyFail, primary).index).to.not.equal(18)
  })

  it('should return index 17 if the history has a passing override result from the primary and no override from the secondary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-01'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-03-01',
      [`${secondary}_override_result`]: 'pass',
      [`${secondary}_override_result_at`]: '2017-03-02'
    }

    expect(returnProgress(history, primary).index).to.equal(17)
    expect(returnProgress(historyFail, primary).index).to.not.equal(17)
  })

  it('should return index 16 if history.enacted === true', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      enacted: true
    }

    expect(returnProgress(history, primary).index).to.equal(16)
  })

  it('should retun index 15 if history.vetoed === true and there are no override results', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15',
      vetoed: true,
      [`${primary}_override_result`]: 'pass',
      [`${primary}_override_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(15)
    expect(returnProgress(historyFail, primary).index).to.not.equal(15)
  })

  it('should return index 14 if history has a passing cloture result preceeded by passing reults from both chambers and less than eight days have passed since most recent passage result', () => {
    // not tested due to the nature of date.now in testing
  })

  it('should return index 16 if history has a passing cloture result preceeded by passing reults from both chambers and more than eight days have passed since most recent passage result', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2016-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(16)
    expect(returnProgress(historyFail, primary).index).to.not.equal(16)
  })

  it('should return index 13 if history has a passing cloture result preceeded by a pass in the seconday and a fail in the primary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'fail',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'fail',
      [`${primary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-03-15'
    }

    expect(returnProgress(history, primary).index).to.equal(13)
    expect(returnProgress(historyFail, primary).index).to.not.equal(13)
  })

  it('should return index 12 if history has a passing cloture result preceeded by a fail in the seconday and a pass in the primary', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_passage_result`]: 'fail',
      [`${secondary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'fail',
      [`${secondary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(12)
    expect(returnProgress(historyFail, primary).index).to.not.equal(12)
  })

  it('should return index 11 if history has a passing cloture result, the passage date of secondary is after primary, and the secondary passage result is fail', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'fail',
      [`${secondary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_passage_result`]: 'fail',
      [`${secondary}_passage_result_at`]: '2017-02-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(11)
    expect(returnProgress(historyFail, primary).index).to.not.equal(11)
  })

  it('should return index 10 if history has a passing cloture result, the passage date of secondary is before primary, and the primary passage result is fail', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'fail',
      [`${primary}_passage_result_at`]: '2017-03-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-03-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(10)
    expect(returnProgress(historyFail, primary).index).to.not.equal(10)
  })

  it('should return index 9 if history has a passing cloture result, the passage date of secondary is after primary, and the secondary passage result is pass', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-03-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-03-02',
      [`${secondary}_cloture_result`]: 'fail',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(9)
    expect(returnProgress(historyFail, primary).index).to.not.equal(9)
  })

  it('should return index 8 if history has a passing cloture result, the passage date of secondary is before primary, and the primary passage result is pass', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-03-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(8)
    expect(returnProgress(historyFail, primary).index).to.not.equal(8)
  })

  it('should return index 7 if the history has a passing cloture result and all other pasage results are before the cloture', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    let historyFail = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-02-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02',
      [`${secondary}_cloture_result`]: 'pass',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(7)
    expect(returnProgress(historyFail, primary).index).to.not.equal(7)
  })

  it('should return index 6 if the cloture result === fail', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02',
      [`${secondary}_cloture_result`]: 'fail',
      [`${secondary}_cloture_result_at`]: '2017-01-15'
    }

    expect(returnProgress(history, primary).index).to.equal(6)
  })

  it('should return index 5 if the secondary passage result === pass and there is no cloture result', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'pass',
      [`${secondary}_passage_result_at`]: '2017-01-02'
    }

    expect(returnProgress(history, primary).index).to.equal(5)
  })

  it('should return index 4 if the secondary passage result === fail and there is no cloture result', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01',
      [`${secondary}_passage_result`]: 'fail',
      [`${secondary}_passage_result_at`]: '2017-01-02'
    }

    expect(returnProgress(history, primary).index).to.equal(4)
  })

  it('should return index 3 if the primary passage result === pass and there is no cloture result', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'pass',
      [`${primary}_passage_result_at`]: '2017-01-01'
    }

    expect(returnProgress(history, primary).index).to.equal(3)
  })

  it('should return index 2 if the primary passage result === fail and there is no cloture result', () => {
    let history = {
      active: true,
      [`${primary}_passage_result`]: 'fail',
      [`${primary}_passage_result_at`]: '2017-01-01'
    }

    expect(returnProgress(history, primary).index).to.equal(2)
  })

  it('should return index 1 if history.active === true', () => {
    let history = { active: true }

    expect(returnProgress(history, primary).index).to.equal(1)
  })

  it('should return index 0 if history.active === false', () => {
    let history = { active: false }

    expect(returnProgress(history, primary).index).to.equal(0)
  })

  it('Should set primary to the chamber passed in and secondary to the alterative chamber', () => {
    let history = { active: false }

    expect(returnProgress(history, 'house').text).to.equal('Introduced in House')
    expect(returnProgress(history, 'senate').text).to.equal('Introduced in Senate')
  })
})
