/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  todoNumber_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {color: 'orange', fontSize: 24, fontWeight: 'bold'},
  number: {
    width: 30,
    textAlign: 'center',
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
  },
});
