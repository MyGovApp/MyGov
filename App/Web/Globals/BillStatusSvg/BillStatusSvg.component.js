import React, { PropTypes } from 'react'
import s from './BillStatusSvg.styles.scss'

const BillStatusSvg = ({ status, progress, chamber, scale }) => {
  const containerWidth = document.getElementById('coreLayout').offsetWidth
  const svgScale = scale ? scale : containerWidth / 400

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
    const x = (xIndex * ((325 - 20) / 6)) + 5
    const y = yOffset + 22

    return (
      <svg
        x={x || '0'}
        y={y || '22'}
      >
        <g>
          {text.length > 1 && (
            <circle
              cy='10'
              cx='10'
              r='10'
              fill={color}
            />
          )}
          <circle
            cx='15'
            cy='10'
            r='10'
            fill={color}
          />
          <text
            x={text.length > 1 ? '12' : '15'}
            y='14'
            fill={lightBlue}
            fontSize='12'
            fontWeight='bold'
            textAnchor='middle'
          >{text}</text>
        </g>
      </svg>
    )
  }

  return (
    <figure className={s.figureContainer}>
      <svg width={350 * svgScale} height={60 * svgScale} viewBox='0 0 350 60' xmlns='http://www.w3.org/2000/svg'>
        <line
          className='lS1'
          x1='20'
          y1='32'
          x2={(1 * ((325 - 20) / 6)) + 20}
          y2='32'
          stroke={chartColors.lS1}
          strokeWidth='4'
        />
        <line
          className='lS2'
          x1={(1 * ((325 - 20) / 6)) + 20}
          y1='32'
          x2={(2 * ((325 - 20) / 6)) + 20}
          y2='32'
          stroke={chartColors.lS2}
          strokeWidth='4'
        />
        <line
          className='lS3'
          x1={(2 * ((325 - 20) / 6)) + 20}
          y1='32'
          x2={(3 * ((325 - 20) / 6)) + 20}
          y2='32'
          stroke={chartColors.lS3}
          strokeWidth='4'
        />
        <line
          className='lS4'
          x1={(3 * ((325 - 20) / 6)) + 20}
          y1='32'
          x2={(4 * ((325 - 20) / 6)) + 20}
          y2='32'
          stroke={chartColors.lS4}
          strokeWidth='4'
        />
        <line
          className='primaryLeft'
          x1={(4 * ((325 - 20) / 6)) + 20}
          y1='32'
          x2={(5 * ((325 - 20) / 6)) + 20}
          y2={32 + 15}
          stroke={chartColors.primaryLeft}
          strokeWidth='4'
        />
        <line
          className='secondaryLeft'
          x1={(4 * ((325 - 20) / 6)) + 20}
          y1='32'
          x2={(5 * ((325 - 20) / 6)) + 20}
          y2={32 - 15}
          stroke={chartColors.secondaryLeft}
          strokeWidth='4'
        />
        <line
          className='primaryRight'
          x1={(5 * ((325 - 20) / 6)) + 20}
          y1={32 + 15}
          x2='325'
          y2='32'
          stroke={chartColors.primaryRight}
          strokeWidth='4'
        />
        <line
          className='secondaryRight'
          x1={(5 * ((325 - 20) / 6)) + 20}
          y1={32 - 15}
          x2='325'
          y2='32'
          stroke={chartColors.secondaryRight}
          strokeWidth='4'
        />
        <TextBubble {...{ text: chartText.t1, color: chartColors.PC }} />
        <TextBubble {...{ text: chartText.t2, xIndex: 1, color: chartColors.PF }} />
        <TextBubble {...{ text: chartText.t3, xIndex: 2, color: chartColors.SC }} />
        <TextBubble {...{ text: chartText.t4, xIndex: 3, color: chartColors.SF }} />
        <TextBubble {...{ text: 'C', xIndex: 4, color: chartColors.C }} />
        <TextBubble {...{ text: chartText.primary, xIndex: 5, yOffset: 15, color: chartColors.primary }} />
        <TextBubble {...{ text: chartText.secondary, xIndex: 5, yOffset: -15, color: chartColors.secondary }} />
        <TextBubble {...{ text: 'P', xIndex: 6, color: chartColors.P }} />
      </svg>
    </figure>
  )
}

BillStatusSvg.propTypes = {
  status: React.PropTypes.string,
  progress: PropTypes.object,
  chamber: PropTypes.string,
  scale: PropTypes.number,
  text: PropTypes.string, // eslint-disable-line
  xIndex: PropTypes.number, // eslint-disable-line
  yOffset: PropTypes.number, // eslint-disable-line
  color: PropTypes.string // eslint-disable-line
}

module.exports = BillStatusSvg
