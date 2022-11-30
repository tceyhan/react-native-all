/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c99',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    opacity: 0.8,
    borderRadius: 10,
    // tintColor: 'white',
    // png formatındaki yerlere tintColor atayabiliyoruz.
  },
  body_container: {
    flex: 1,
  },
  or: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
 
});
