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
    paddingLeft: 10
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
    alignSelf: 'flex-start',
    height: 30,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 30,
    marginTop: 10,
    width: 30
  }
}
