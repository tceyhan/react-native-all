/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#c54800',
    borderRadius: 5,
    backgroundColor: '#e8f5e9',
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
