/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    margin: 5,
    backgroundColor: '#c33',
    borderRadius: 10,
    alignItems: 'center',
  },
  inner_container: {
    width: 100,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  icon:{
    marginHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});
