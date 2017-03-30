import React, { Component } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import styles from './DrawerContent.styles'
import DrawerButton from '../../Globals/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

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

  render () {
    const { updateBillFilters, sortOrder } = this.props
    console.log('drawerContent pre render props', this.props)
    return (
      <ScrollView style={styles.container}>
        <DrawerButton
          text={`Sort ${sortOrder} By:`}
          onPress={() => updateBillFilters({ sortOrder: sortOrder === 'acending' ? 'decending' : 'acending' })}
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
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
