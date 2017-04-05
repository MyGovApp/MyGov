import React, { PropTypes } from 'react'
import Svg, { Circle, G, Line, Text } from 'react-native-svg'

const BillStatus = ({ status, progress, chamber }) => {
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

  if (progress.index === 1) {
    chartColors.PC = yellow
  }

  if (progress.index === 2) {
    chartColors.PC = red
  }

  if (progress.index === 3) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = yellow
    chartColors.SC = yellow
  }

  if (progress.index === 4) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = red
    chartColors.SC = red
  }

  if (progress.index === 5) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = yellow
    chartColors.C = yellow
  }

  if (progress.index === 6) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = red
    chartColors.C = red
  }

  if (progress.index === 7) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = yellow
    chartColors.primaryLeft = yellow
    chartColors.secondary = yellow
    chartColors.secondaryLeft = yellow
  }

  if (progress.index === 8) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = green
    chartColors.primaryLeft = green
    chartColors.secondary = yellow
    chartColors.secondaryLeft = yellow
  }

  if (progress.index === 9) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = yellow
    chartColors.primaryLeft = yellow
    chartColors.secondary = green
    chartColors.secondaryLeft = green
  }

  if (progress.index === 10) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = red
    chartColors.primaryLeft = red
    chartColors.secondary = grey
    chartColors.secondaryLeft = grey
  }

  if (progress.index === 11) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = grey
    chartColors.primaryLeft = grey
    chartColors.secondary = red
    chartColors.secondaryLeft = red
  }

  if (progress.index === 12) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = green
    chartColors.primaryLeft = green
    chartColors.secondary = red
    chartColors.secondaryLeft = red
  }

  if (progress.index === 13) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primary = red
    chartColors.primaryLeft = red
    chartColors.secondary = green
    chartColors.secondaryLeft = green
  }

  if (progress.index === 14) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = green
    chartColors.primaryRight = yellow
    chartColors.secondaryLeft = green
    chartColors.secondary = green
    chartColors.secondaryRight = yellow
    chartColors.P = yellow
  }

  if (progress.index === 15) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = yellow
    chartColors.primaryRight = yellow
    chartColors.secondaryLeft = green
    chartColors.secondary = yellow
    chartColors.secondaryRight = yellow
    chartColors.P = red
  }

  if (progress.index === 16) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondaryLeft = green
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = green
  }

  if (progress.index === 17) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondaryLeft = green
    chartColors.secondary = yellow
    chartColors.secondaryRight = yellow
    chartColors.P = red
  }

  if (progress.index === 18) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = yellow
    chartColors.primaryRight = yellow
    chartColors.secondaryLeft = green
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = red
  }

  if (progress.index === 19) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = red
    chartColors.primaryRight = red
    chartColors.secondaryLeft = green
    chartColors.secondary = grey
    chartColors.secondaryRight = grey
    chartColors.P = red
  }

  if (progress.index === 20) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = grey
    chartColors.primaryRight = grey
    chartColors.secondaryLeft = green
    chartColors.secondary = red
    chartColors.secondaryRight = red
    chartColors.P = red
  }

  if (progress.index === 21) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondaryLeft = green
    chartColors.secondary = red
    chartColors.secondaryRight = red
    chartColors.P = red
  }

  if (progress.index === 22) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = red
    chartColors.primaryRight = red
    chartColors.secondaryLeft = green
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = red
  }

  if (progress.index === 23) {
    chartColors.PC = green
    chartColors.lS1 = green
    chartColors.PF = green
    chartColors.lS2 = green
    chartColors.SC = green
    chartColors.lS3 = green
    chartColors.SF = green
    chartColors.lS4 = green
    chartColors.C = green
    chartColors.primaryLeft = green
    chartColors.primary = green
    chartColors.primaryRight = green
    chartColors.secondaryLeft = green
    chartColors.secondary = green
    chartColors.secondaryRight = green
    chartColors.P = green
  }

  const TextBubble = ({ text, xIndex, yOffset, color }) => {
    const x = (xIndex * ((325 - 20) / 6)) + 20
    const y = yOffset + 30
    return (
      <G
        x={x || '20'}
        y={y || '30'}
      >
        {text.length > 1 && (
          <Circle
            r='10'
            fill={color}
          />
        )}
        <Circle
          cx='5'
          r='10'
          fill={color}
        />
        <Text
          y='-8'
          x={text.length > 1 ? '2' : '5'}
          fill={lightBlue}
          fontSize='12'
          fontWeight='bold'
          textAnchor='middle'
        >{text}</Text>
      </G>
    )
  }

  return (
    <Svg
      height='60'
      width='350'
      style={{ margin: 10 }}
    >
      <Line
        className='lS1'
        x1='20'
        y1='30'
        x2={(1 * ((325 - 20) / 6)) + 20}
        y2='30'
        stroke={chartColors.lS1}
        strokeWidth='4'
      />
      <Line
        className='lS2'
        x1={(1 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(2 * ((325 - 20) / 6)) + 20}
        y2='30'
        stroke={chartColors.lS2}
        strokeWidth='4'
      />
      <Line
        className='lS3'
        x1={(2 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(3 * ((325 - 20) / 6)) + 20}
        y2='30'
        stroke={chartColors.lS3}
        strokeWidth='4'
      />
      <Line
        className='lS4'
        x1={(3 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(4 * ((325 - 20) / 6)) + 20}
        y2='30'
        stroke={chartColors.lS4}
        strokeWidth='4'
      />
      <Line
        className='primaryLeft'
        x1={(4 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(5 * ((325 - 20) / 6)) + 20}
        y2={30 + 15}
        stroke={chartColors.primaryLeft}
        strokeWidth='4'
      />
      <Line
        className='secondaryLeft'
        x1={(4 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(5 * ((325 - 20) / 6)) + 20}
        y2={30 - 15}
        stroke={chartColors.secondaryLeft}
        strokeWidth='4'
      />
      <Line
        className='primaryRight'
        x1={(5 * ((325 - 20) / 6)) + 20}
        y1={30 + 15}
        x2='325'
        y2='30'
        stroke={chartColors.primaryRight}
        strokeWidth='4'
      />
      <Line
        className='secondaryRight'
        x1={(5 * ((325 - 20) / 6)) + 20}
        y1={30 - 15}
        x2='325'
        y2='30'
        stroke={chartColors.secondaryRight}
        strokeWidth='4'
      />
      {TextBubble({ text: chartText.t1, color: chartColors.PC })}
      {TextBubble({ text: chartText.t2, xIndex: 1, color: chartColors.PF })}
      {TextBubble({ text: chartText.t3, xIndex: 2, color: chartColors.SC })}
      {TextBubble({ text: chartText.t4, xIndex: 3, color: chartColors.SF })}
      {TextBubble({ text: 'C', xIndex: 4, color: chartColors.C })}
      {TextBubble({ text: chartText.primary, xIndex: 5, yOffset: 15, color: chartColors.primary })}
      {TextBubble({ text: chartText.secondary, xIndex: 5, yOffset: -15, color: chartColors.secondary })}
      {TextBubble({ text: 'P', xIndex: 6, color: chartColors.P })}
    </Svg>
  )
}

BillStatus.propTypes = {
  status: React.PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  chamber: PropTypes.string.isRequired,
  text: PropTypes.string, // eslint-disable-line
  xIndex: PropTypes.number, // eslint-disable-line
  yOffset: PropTypes.number, // eslint-disable-line
  color: PropTypes.string // eslint-disable-line
}

module.exports = BillStatus
