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

  renderFilterButton = ({ label }) => {
    const { updateBillFilters } = this.props
    return (
      <DrawerButton
        text={label}
        onPress={() => updateBillFilters({ filter: camelCase(label) })}
        icon={images[`${camelCase(label)}Icon`]}
      />
    )
  }

  render () {
    const {
      updateBillFilters,
      sortOrder,
      active,
      tabled,
      failed,
      enacted
    } = this.props

    const FilterButton = this.renderFilterButton

    return (
      <ScrollView style={styles.container}>
        <DrawerButton
          text={`Sort ${sortOrder} By:`}
          onPress={() => updateBillFilters({
            sortOrder: sortOrder === 'acending' ? 'decending' : 'acending'
          })}
          isIndex
        />
        <DrawerButton
          text='Date Introduced'
          onPress={() => updateBillFilters({ sortBy: 'introduced' })}
          icon={images.calendarIcon}
        />
        <DrawerButton
          text='Bill Progress'
          onPress={() => updateBillFilters({ sortBy: 'progress' })}
          icon={images.checkIcon}
        />
        <DrawerButton
          text='Filter By Status:'
          onPress={() => {}}
          isIndex
        />
        <DrawerButton
          text='Active'
          onPress={() => updateBillFilters({ active: !active })}
          icon={images.flagIcon}
        />
        <DrawerButton
          text='Tabled'
          onPress={() => updateBillFilters({ tabled: !tabled })}
          icon={images.tabledIcon}
        />
        <DrawerButton
          text='Failed'
          onPress={() => updateBillFilters({ failed: !failed })}
          icon={images.failedIcon}
        />
        <DrawerButton
          text='Enacted'
          onPress={() => updateBillFilters({ enacted: !enacted })}
          icon={images.enactedIcon}
        />
        <DrawerButton
          text='Filter By Issue:'
          onPress={() => {}}
          isIndex
        />
        {billFilters.map((filter, i) => <FilterButton key={i} label={filter.label} />)}
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
  active: PropTypes.bool,
  tabled: PropTypes.bool,
  failed: PropTypes.bool,
  enacted: PropTypes.bool
}

export default DrawerContent
