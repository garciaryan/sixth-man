import { StyleSheet } from 'react-native'

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
    textDecorationLine: 'underline'
  }
});

export default authStyles;