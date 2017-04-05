import { fonts, colors } from '../../Themes'

export default {
  default: {
    container: {
      backgroundColor: colors.primaryBlue,
      borderRadius: 4,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20
    },
    text: {
      ...fonts.style.normal,
      color: 'white'
    }
  }
}
