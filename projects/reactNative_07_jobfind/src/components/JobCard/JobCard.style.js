/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c88',
    shadowColor: '#c88',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  company_name: {
    letterSpacing: 1,
    color: 'black',
    fontSize: 14,
    marginBottom: 3,
  },
  location: {
    borderRadius: 40,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: '#c44',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    alignSelf: 'flex-start',
  },
  level: {
    textAlign: 'right',
    color: '#c55',
    fontWeight: 'bold',
  },
});
