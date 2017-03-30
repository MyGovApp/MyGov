import React, { Component, PropTypes } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { camelCase } from 'lodash'
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
      />
    )
  }

  render () {
    const {
      updateBillFilters,
      sortOrder,
      statusActive,
      statusTabled,
      statusFailed,
      statusEnacted
    } = this.props

    const FilterButton = this.renderFilterButton

    return (
      <ScrollView style={styles.container}>
        <DrawerButton
          text={`Sort ${sortOrder} By:`}
          onPress={() => updateBillFilters({
            sortOrder: sortOrder === 'acending' ? 'decending' : 'acending'
          })}
        />
        <DrawerButton
          text='Date Introduced'
          onPress={() => updateBillFilters({ sortBy: 'introduced' })}
        />
        <DrawerButton
          text='Bill Progress'
          onPress={() => updateBillFilters({ sortBy: 'progress' })}
        />
        <DrawerButton
          text='Popularity'
          onPress={() => updateBillFilters({ sortBy: 'popularity' })}
        />
        <DrawerButton
          text='Filter By Status:'
          onPress={() => {}}
        />
        <DrawerButton
          text='Active'
          onPress={() => updateBillFilters({ statusActive: !statusActive })}
        />
        <DrawerButton
          text='Tabled'
          onPress={() => updateBillFilters({ statusTabled: !statusTabled })}
        />
        <DrawerButton
          text='Failed'
          onPress={() => updateBillFilters({ statusFailed: !statusFailed })}
        />
        <DrawerButton
          text='Enacted'
          onPress={() => updateBillFilters({ statusEnacted: !statusEnacted })}
        />
        <DrawerButton
          text='Filter By Issue:'
          onPress={() => {}}
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
  statusActive: PropTypes.bool,
  statusTabled: PropTypes.bool,
  statusFailed: PropTypes.bool,
  statusEnacted: PropTypes.bool
}

export default DrawerContent
