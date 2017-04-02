import React, { Component, PropTypes } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { camelCase } from 'lodash'
import { images } from '../../Themes'
import styles from './DrawerContent.styles'
import DrawerButton from '../../Globals/DrawerButton'
import billFilters from './billFilters'

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
    const rightIcon = checked ? images.checkIcon2 : null

    return (
      <DrawerButton
        text={label}
        onPress={() => updateBillFilters({ filter: camelCase(label) })}
        leftIcon={images[`${camelCase(label)}Icon`]}
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
      <ScrollView style={styles.container}>
        <DrawerButton
          text={`Sort ${sortOrder} By:`}
          onPress={() => updateBillFilters({
            sortOrder: sortOrder === 'acending' ? 'decending' : 'acending'
          })}
          rightIcon={sortOrder === 'acending' ? images.upArrow : images.downArrow}
          isIndex
        />
        <DrawerButton
          text='Bill Progress'
          onPress={() => updateBillFilters({ sortBy: 'progress' })}
          leftIcon={images.checkIcon}
          rightIcon={sortBy === 'progress' && images.checkIcon2}
        />
        <DrawerButton
          text='Date Introduced'
          onPress={() => updateBillFilters({ sortBy: 'introduced' })}
          leftIcon={images.calendarIcon}
          rightIcon={sortBy === 'introduced' && images.checkIcon2}
        />
        <DrawerButton
          text='Last Action'
          onPress={() => updateBillFilters({ sortBy: 'lastAction' })}
          leftIcon={images.lastActionIcon}
          rightIcon={sortBy === 'lastAction' && images.checkIcon2}
        />
        <DrawerButton
          text='Filter By Status:'
          isIndex
        />
        <DrawerButton
          text='Active'
          onPress={() => updateBillFilters({ active: !active })}
          leftIcon={images.flagIcon}
          rightIcon={active && images.checkIcon2}
        />
        <DrawerButton
          text='Tabled'
          onPress={() => updateBillFilters({ tabled: !tabled })}
          leftIcon={images.tabledIcon}
          rightIcon={tabled && images.checkIcon2}
        />
        <DrawerButton
          text='Failed'
          onPress={() => updateBillFilters({ failed: !failed })}
          leftIcon={images.failedIcon}
          rightIcon={failed && images.checkIcon2}
        />
        <DrawerButton
          text='Enacted'
          onPress={() => updateBillFilters({ enacted: !enacted })}
          leftIcon={images.enactedIcon}
          rightIcon={enacted && images.checkIcon2}
        />
        <DrawerButton
          text='My Bills'
          onPress={() => updateBillFilters({ myBills: !myBills })}
          leftIcon={images.myBillsIcon}
          rightIcon={myBills && images.checkIcon2}
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
