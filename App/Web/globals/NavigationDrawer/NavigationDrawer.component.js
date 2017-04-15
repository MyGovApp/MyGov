import React, { Component, PropTypes } from 'react'
import { camelCase } from 'lodash'
import classes from './NavigationDrawer.styles.scss'
import DrawerButton from 'Globals/DrawerButton'
import I from '../../../Native/Themes/Images'
import billFilters from '../../../Modules/DrawerContent/billFilters'

class NavigationDrawer extends Component {
  constructor () {
    super()
    this.state = {}
  }

  renderFilterButton = ({ label, checked }) => {
    const { updateBillFilters } = this.props
    const rightIcon = checked ? I.checkIcon2 : null

    return (
      <DrawerButton
        text={label}
        onPress={() => updateBillFilters({ filter: camelCase(label) })}
        leftIcon={I[`${camelCase(label)}Icon`]}
        {...{ rightIcon }}
      />
    )
  }

  render () {
    const {
      drawerOpen,
      updateBillFilters,
      sortOrder,
      sortBy,
      active,
      tabled,
      failed,
      enacted,
      filters,
      myBills
    } = this.props

    const toggleStyle = drawerOpen ? { marginRight: 0 } : { marginRight: '-80%' }
    const FilterButton = this.renderFilterButton

    return (
      <div
        className={classes.drawer}
        style={toggleStyle}>

        <DrawerButton
          text={`Sort ${sortOrder} By:`}
          onPress={() => updateBillFilters({
            sortOrder: sortOrder === 'acending' ? 'decending' : 'acending'
          })}
          rightIcon={sortOrder === 'acending' ? I.upArrow : I.downArrow}
          isIndex
        />
        <DrawerButton
          text='Bill Progress'
          onPress={() => updateBillFilters({ sortBy: 'progress' })}
          leftIcon={I.checkIcon}
          rightIcon={sortBy === 'progress' && I.checkIcon2}
        />
        <DrawerButton
          text='Date Introduced'
          onPress={() => updateBillFilters({ sortBy: 'introduced' })}
          leftIcon={I.calendarIcon}
          rightIcon={sortBy === 'introduced' && I.checkIcon2}
        />
        <DrawerButton
          text='Last Action'
          onPress={() => updateBillFilters({ sortBy: 'lastAction' })}
          leftIcon={I.lastActionIcon}
          rightIcon={sortBy === 'lastAction' && I.checkIcon2}
        />
        <DrawerButton
          text='Filter By Status:'
          isIndex
        />
        <DrawerButton
          text='Active'
          onPress={() => updateBillFilters({ active: !active })}
          leftIcon={I.flagIcon}
          rightIcon={active && I.checkIcon2}
        />
        <DrawerButton
          text='Tabled'
          onPress={() => updateBillFilters({ tabled: !tabled })}
          leftIcon={I.tabledIcon}
          rightIcon={tabled && I.checkIcon2}
        />
        <DrawerButton
          text='Failed'
          onPress={() => updateBillFilters({ failed: !failed })}
          leftIcon={I.failedIcon}
          rightIcon={failed && I.checkIcon2}
        />
        <DrawerButton
          text='Enacted'
          onPress={() => updateBillFilters({ enacted: !enacted })}
          leftIcon={I.enactedIcon}
          rightIcon={enacted && I.checkIcon2}
        />
        <DrawerButton
          text='My Bills'
          onPress={() => updateBillFilters({ myBills: !myBills })}
          leftIcon={I.myBillsIcon}
          rightIcon={myBills && I.checkIcon2}
        />
        <DrawerButton
          text='Filter By Issue:'
          isIndex
        />
        {billFilters.map((filter, i) => (
          <FilterButton
            key={i}
            label={filter.label}
            checked={filters.find((filterMatch) => filterMatch === camelCase(filter.label))}
          />
        ))}
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
  updateBillFilters: PropTypes.func,
  sortOrder: PropTypes.string,
  sortBy: PropTypes.string,
  active: PropTypes.bool,
  tabled: PropTypes.bool,
  failed: PropTypes.bool,
  enacted: PropTypes.bool,
  myBills: PropTypes.bool,
  filters: PropTypes.array
}

module.exports = NavigationDrawer
