import { fonts, colors } from '../../Themes'

const styles = {
  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 70
  },
  summaryContainer: {
    alignItems: 'center',
    borderBottomColor: colors.frost,
    borderBottomWidth: 1
  },
  id: {
    paddingTop: 10,
    fontSize: 25
  },
  title: {
    ...fonts.style.h1,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 30
  }
}

export default styles
