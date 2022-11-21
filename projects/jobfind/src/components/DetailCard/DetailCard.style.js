/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content_container: {
    borderWidth: 1,
    padding: 10,
  },
  header_container: {
    // // borderWidth: 1,
    backgroundColor: '#f8f8ff',
    padding: 5,
  },
  jobname:{
    fontWeight: 'bold',
    fontSize:22,
    color: 'black',
  },
  text: {color:'#c55', fontWeight: 'bold'},
  inner_text:{color:'black', fontWeight: 'bold'},
  header:{
    textAlign: 'center',
    fontSize:25,
    fontWeight: 'bold',
    color: 'black',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
