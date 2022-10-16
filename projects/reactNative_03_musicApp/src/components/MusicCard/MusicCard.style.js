/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
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
    fontWeight: 'bold',
    fontSize: 27,
  },
  content_container:{
   
    flexDirection: 'row',
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    marginLeft:12,
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
});
