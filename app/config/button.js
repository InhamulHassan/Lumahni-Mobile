//TODO: Customize the buttons and make them reusable and consistent throughout the app
import colors from './colors';
import constants from 'Constants';
import { StyleSheet } from 'react-native';
const buttonStyles = StyleSheet.create({
  buttonPrimary: {
    height: 42,
    borderRadius: 3
  },
  buttonOutline: {
    height: 42,
    borderRadius: 3,
    borderWidth: 2 
  },
  buttonOutlineDark: {
    ...buttonOutline,
    borderColor: colors.white
  },
  buttonOutlineWhite: {
    ...buttonOutline,
    borderColor: colors.white
  },
  buttonFull: {
    width: '100%',
    marginLeft: 0,
    marginRight: 0
  }
});
export default buttonStyles;