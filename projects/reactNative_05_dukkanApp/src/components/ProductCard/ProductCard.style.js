/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode:'contain',
    backgroundColor: 'white',
  },
  body_container: {
    flex:1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    display:'flex',
    textAlign: 'right',
    fontSize: 16,
    fontStyle:'italic',
  },
});
