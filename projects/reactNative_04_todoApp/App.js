import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/header/Header';
import Footer from './src/footer/Footer';
import TodoItem from './src/todoitem/TodoItem';

const initialTodo = [
  'React Native Document will have been read',
  'Django project will been have done',
];

const App = () => {
  const [todoList, setTodoList] = useState(initialTodo);
  const [text, setText] = useState('');
  const onChange = value => {
    setText(value);
    console.log(text);
    setTodoList([...todoList], text);
  };

  // const todoRender = ({item}) => console.log(<Text>{item.text}</Text>);
  const todoRender = ({item}) => <TodoItem todo={item} />;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={item => item.index}
        data={todoList}
        renderItem={todoRender}
      />
      <Footer onChange={onChange} text={text} setText={setText} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});
