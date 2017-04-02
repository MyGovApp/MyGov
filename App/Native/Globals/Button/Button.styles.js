import { fonts, colors } from '../../Themes'

const styles = {
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

export default styles
