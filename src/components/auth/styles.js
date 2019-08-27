import { StyleSheet } from 'react-native'
import colors from '../../colors'

const authStyles = StyleSheet.create({
  loginCard: {
    justifyContent: 'center',
		alignContent: 'center',
  },
  cardSections: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 3
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'Lato-Light',
    textDecorationLine: 'underline'
  },
  button: {
    backgroundColor: colors.$green,
    color: '#fff'
  }
});

export default authStyles;