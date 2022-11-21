/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pagination_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
  },
  page_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginHorizontal: 10,
    backgroundColor: '#c77',
    borderRadius: 10,
  },
  page: {
    alignSelf: 'left',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  picker: {
    // alignSelf: 'right',
    marginLeft:100,
  },
});
