/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#7DA453',
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  todo_text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  todo_text_done: {
    fontSize: 18,
    color: 'gray',
    textDecorationLine: 'line-through',
    textTransform: 'capitalize',
  },
});
