/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'whitegray',
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    // flex içerisinde bulunduğu yer kadar yer kaplar
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
  },
  content_container: {
    flexDirection: 'row',
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  artist: {
    color: 'black',
  },
  year: {
    marginLeft: 12,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldout_container: {
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
  album: {
    color: 'green',
    fontSize: 10,
    borderRadius: 5,
    borderWidth: 1,
    fontWeight: 'bold',
    width: 50,
    marginTop: 5,
    padding: 2,
    textAlign: 'center',
   
 
  },
});
