import { colors, fonts } from '../../Themes'

export default {
  mainView: {
    flexDirection: 'column',
    marginTop: 64,
    flex: 1,
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
