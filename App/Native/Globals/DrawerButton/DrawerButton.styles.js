import { metrics, colors, fonts } from '../../Themes'

export default {
  borderContainer: {
    borderBottomColor: colors.frost,
    borderBottomWidth: 1,
    borderLeftColor: colors.frost,
    borderLeftWidth: 1
  },
  indexBorder: {
    borderBottomColor: colors.secondaryBlue,
    borderLeftColor: colors.secondaryBlue
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-between'
  },
  leftIconContainer: {
    justifyContent: 'flex-start'
  },
  indexContainer: {
    backgroundColor: colors.secondaryBlue
  },
  text: {
    ...fonts.style.h5,
    color: colors.black,
    marginVertical: metrics.baseMargin
  },
  indexText: {
    color: 'white'
  },
  icon: {
    height: 30,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: 30
  }
}
