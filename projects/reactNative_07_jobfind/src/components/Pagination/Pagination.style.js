/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pagination_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:5,
  },
  page_container: {
    width:100,
    padding: 5,
    marginHorizontal: 10,
    backgroundColor: '#c44',
    borderRadius: 10,
    paddingVertical: 5,
  },
  page: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});
