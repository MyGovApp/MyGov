import { fonts, colors, applicationStyles } from '../../Themes'

export default {
  ...applicationStyles.screen,
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
