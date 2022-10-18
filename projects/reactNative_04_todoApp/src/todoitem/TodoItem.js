/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import styles from './TodoItem.style';

const TodoItem = ({todo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.todo_text}>{todo.todo}</Text>
    </View>
  );
};

export default TodoItem;
