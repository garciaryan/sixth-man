import { StyleSheet, Platform } from 'react-native'
import colors from './colors'

const gstyles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'RockSalt-Regular',
    //color: colors.$green,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    paddingLeft: 7
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default gstyles;