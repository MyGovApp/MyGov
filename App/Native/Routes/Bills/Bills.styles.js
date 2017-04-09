import { colors, fonts, applicationStyles } from '../../Themes'

export default {
  mainContainer: {
    ...applicationStyles.screen.mainContainer,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.backgroundGray
  },
  billCount: {
    textAlign: 'center'
  },
  noBills: {
    color: colors.darkGrey,
    textAlign: 'center',
    paddingBottom: 50,
    ...fonts.style.h2
  }
}
