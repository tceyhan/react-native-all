/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#c99',
  },
  logo: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    opacity: 0.8,
    borderRadius: 10,
},
or: {
  alignSelf: 'center',
  color: 'black',
  fontWeight: 'bold',
},
});
