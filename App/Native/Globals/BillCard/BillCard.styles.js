import { colors } from '../../Themes'

const styles = {
  boldSpan: {
    fontWeight: '600'
  },
  container: {
    backgroundColor: colors.backgroundLight,
    shadowOpacity: 0.5,
    margin: 10,
    paddingTop: 20,
    shadowColor: colors.shadow,
    alignItems: 'center',
    shadowOffset: {
      height: 5
    }
  },
  id: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15
  },
  lastAction: {
    marginTop: 5
  },
  textCommon: {
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  }
}

export default styles
