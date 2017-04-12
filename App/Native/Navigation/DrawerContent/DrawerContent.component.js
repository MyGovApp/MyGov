import React, { Component, PropTypes } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { camelCase } from 'lodash'
import { images as I } from '../../Themes'
import { DrawerButton } from '../../Globals'
import s from './DrawerContent.styles'
import billFilters from '../../../Modules/DrawerContent/billFilters'

class DrawerContent extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  route = (route) => {
    this.toggleDrawer()
    NavigationActions[route]()
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

    const FilterButton = this.renderFilterButton

    return (
      <ScrollView style={s.container}>
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
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: PropTypes.object
}

DrawerContent.propTypes = {
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

export default DrawerContent
