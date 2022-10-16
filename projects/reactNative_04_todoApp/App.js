import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/header/Header';
import Footer from './src/footer/Footer';
import TodoItem from './src/todoitem/TodoItem';

const App = () => {
  const [todoList, setTodoList] = useState([
    {id: '1', text: 'deneme'},
    {id: '2', text: 'deneme2'},
  ]);
  const [text, setText] = useState('');
  const onChange = text => {
    todoList.push(text);
    setText('');
  };

  // const todoRender = ({item}) => console.log(<Text>{item.text}</Text>);
  const todoRender = ({item}) => <TodoItem todo={item} />;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={item => item.id}
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
