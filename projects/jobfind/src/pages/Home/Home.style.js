/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pagination_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  button: {
    width: 40,
  },
  page_container: {
    padding: 8,
    margin: 10,
    backgroundColor: '#005ac1',
    borderRadius: 10,
    alignItems: 'center',
  },
  page: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
