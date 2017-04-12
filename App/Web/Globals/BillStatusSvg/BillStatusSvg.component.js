import React, { PropTypes } from 'react'

const BillStatusSvg = ({ status, progress, chamber }) => {
  const green = '#B8E986'
  let yellow = '#FFF1BF'
  const red = '#FFD1D1'
  const lightBlue = '#50739C'
  const grey = '#D9D9D9'

  if (status === 'tabled') yellow = grey

  const chartText = chamber === 'house'
    ? { t1: 'HC', t2: 'HF', t3: 'SC', t4: 'SF', primary: 'H', secondary: 'S' }
    : { t1: 'SC', t2: 'SF', t3: 'HC', t4: 'HF', primary: 'S', secondary: 'H' }

  const chartColors = {
    PC: grey,
    lS1: grey,
    PF: grey,
    lS2: grey,
    SC: grey,
    lS3: grey,
    SF: grey,
    lS4: grey,
    C: grey,
    secondaryLeft: grey,
    primaryLeft: grey,
    secondary: grey,
    primary: grey,
    secondaryRight: grey,
    primaryRight: grey,
    P: grey
  }

  if (progress.index >= 1) {
    chartColors.PC = yellow
  }

  if (progress.index >= 2) {
    chartColors.PC = red
  }

  if (progress.index >= 3) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = yellow
    chartColors.SC = yellow
  }

  if (progress.index >= 4) {
    chartColors.lS2 = red
    chartColors.SC = red
  }

  if (progress.index >= 5) {
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = yellow
    chartColors.C = yellow
  }

  if (progress.index >= 6) {
    chartColors.lS4 = red
    chartColors.C = red
  }

  if (progress.index >= 7) {
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = yellow
    chartColors.primaryLeft = yellow
    chartColors.secondary = yellow
    chartColors.secondaryLeft = yellow
  }

  if (progress.index >= 8) {
    chartColors.primary = green
    chartColors.primaryLeft = green
  }

  if (progress.index >= 9) {
    chartColors.primary = yellow
    chartColors.primaryLeft = yellow
    chartColors.secondary = green
    chartColors.secondaryLeft = green
  }

  if (progress.index >= 10) {
    chartColors.primary = red
    chartColors.primaryLeft = red
    chartColors.secondary = grey
    chartColors.secondaryLeft = grey
  }

  if (progress.index >= 11) {
    chartColors.primary = grey
    chartColors.primaryLeft = grey
    chartColors.secondary = red
    chartColors.secondaryLeft = red
  }

  if (progress.index >= 12) {
    chartColors.primary = green
    chartColors.primaryLeft = green
    chartColors.secondary = red
    chartColors.secondaryLeft = red
  }

  if (progress.index >= 13) {
    chartColors.primary = red
    chartColors.primaryLeft = red
    chartColors.secondary = green
    chartColors.secondaryLeft = green
  }

  if (progress.index >= 14) {
    chartColors.primaryLeft = green
    chartColors.primary = green
    chartColors.primaryRight = yellow
    chartColors.secondaryRight = yellow
    chartColors.P = yellow
  }

  if (progress.index >= 15) {
    chartColors.primary = yellow
    chartColors.secondary = yellow
    chartColors.P = red
  }

  if (progress.index >= 16) {
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = green
  }

  if (progress.index >= 17) {
    chartColors.secondary = yellow
    chartColors.secondaryRight = yellow
    chartColors.P = red
  }

  if (progress.index >= 18) {
    chartColors.primary = yellow
    chartColors.primaryRight = yellow
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = red
  }

  if (progress.index >= 19) {
    chartColors.primary = red
    chartColors.primaryRight = red
    chartColors.secondary = grey
    chartColors.secondaryRight = grey
    chartColors.P = red
  }

  if (progress.index >= 20) {
    chartColors.primary = grey
    chartColors.primaryRight = grey
    chartColors.secondary = red
    chartColors.secondaryRight = red
    chartColors.P = red
  }

  if (progress.index >= 21) {
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondary = red
    chartColors.secondaryRight = red
    chartColors.P = red
  }

  if (progress.index >= 22) {
    chartColors.primary = red
    chartColors.primaryRight = red
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = red
  }

  if (progress.index >= 23) {
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = green
  }

  const TextBubble = ({ text, xIndex, yOffset, color }) => {
    const x = (xIndex * ((325 - 20) / 6)) + 20
    const y = yOffset + 30

    return
  }

  return (
    <svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <rect fill='#D0011B' x='0' y='0' width='50' height='100' />
        <rect fill='#50E3C2' x='50' y='0' width='50' height='100' />
      </g>
    </svg>
  )
}

BillStatusSvg.propTypes = {
  status: React.PropTypes.string,
  progress: PropTypes.object,
  chamber: PropTypes.string,
  text: PropTypes.string,
  xIndex: PropTypes.number,
  yOffset: PropTypes.number,
  color: PropTypes.string
}

module.exports = BillStatusSvg
