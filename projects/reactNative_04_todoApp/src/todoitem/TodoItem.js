/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import styles from './TodoItem.style';

const TodoItem = ({todo, handleRemoveTodo, handleCompletedTodo, isDone}) => {
  return (
    <View style={styles.container}>
      <Text
        style={isDone? styles.todo_text_done : styles.todo_text}
        onLongPress={() => handleRemoveTodo(todo.id)}
        onPress={handleCompletedTodo}>
        {todo.todo}
      </Text>
    </View>
  );
};

export default TodoItem;
