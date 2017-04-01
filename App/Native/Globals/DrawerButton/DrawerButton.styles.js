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
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    ...fonts.style.h5,
    color: colors.black,
    marginVertical: metrics.baseMargin
  },
  indexText: {
    color: 'white'
  },
  iconLeft: {
    height: 30,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: 30
  },
  iconRight: {
    height: 20,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    width: 20
  }
}
