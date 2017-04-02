import { colors, fonts } from '../../Themes'

const styles = {
  container: {
    backgroundColor: colors.backgroundWhite,
    shadowOpacity: 0.5,
    margin: 10,
    paddingTop: 20,
    paddingRight: 5,
    paddingLeft: 5,
    shadowColor: colors.shadow,
    alignItems: 'center',
    shadowOffset: {
      height: 5
    }
  },
  billDetials: {
    color: colors.darkGrey,
    paddingLeft: 10,
    ...fonts.style.normal
  },
  buttonBorder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: colors.frost,
    borderTopWidth: 1,
    flex: 1,
    width: 300,
    padding: 5
  }
}

export default styles
