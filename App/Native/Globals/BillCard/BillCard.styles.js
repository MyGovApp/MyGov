import { colors, fonts } from '../../Themes'

const styles = {
  boldSpan: {
    fontWeight: '600'
  },
  container: {
    backgroundColor: colors.backgroundWhite,
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
