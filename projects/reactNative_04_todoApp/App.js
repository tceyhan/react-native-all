/* eslint-disable prettier/prettier */
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/header/Header';
import Footer from './src/footer/Footer';
import TodoItem from './src/todoitem/TodoItem';

const initialTodo = [
  // {id: 1, todo: 'React Native Document will have been read'},
  // {id: 2, todo: 'Django project will been have done'},
];

const App = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [todoList, setTodoList] = useState(initialTodo);
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);

  const onChange = value => {
    // console.log(value);
    setText(value);
  };

  const handleList = () => {
    console.log(text);
    const randomId = Math.floor(Math.random() * 1000);
    if (text.length >= 5) {
      const newTodo = {id: randomId, todo: text, isDone:false};
      setTodoList([...todoList, newTodo ]);
      setTodoCount(todoCount + 1);
    } else {
      const uyari = 'Todo cümlesi 5 harften küçük olamaz!!';
      Alert.alert(uyari);
    }
    //! burada listeyi spread metot ile açıyoruz ve virgül ile eklemek istediğimiz yeni liste elemanını tanımlıyoruz ancak liste elemanlarımız obje olduğu için obje olarak göndermemiz gerekir.
    setText('');
    //? input değeri sıfırlanmalı ki her defasında eski text'i silip yenisini yazmak zorunda kalmayalım.
  };
  // console.log(todoList);

  const handleCompletedTodo = () => {
    setCompleted(!completed);
  };

  const handleRemoveTodo = todoId => {
    const filteredTodoList = todoList.filter(item => item.id !== todoId);
    // console.log(filteredTodoList);
    setTodoList(filteredTodoList);
    setTodoCount(todoCount - 1);
  };

  // const todoRender = ({item}) => console.log(<Text>{item.text}</Text>);
  const todoRender = ({item}) => (
    <TodoItem
      todo={item}
      handleRemoveTodo={handleRemoveTodo}
      handleCompletedTodo={handleCompletedTodo}
      isDone={completed}
    />
  );
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <FlatList
        ListHeaderComponent={() => <Header count={todoCount} />}
        keyExtractor={item => item.id}
        data={todoList}
        renderItem={todoRender}
      />
      <Footer onChange={onChange} value={text} handleList={handleList} />
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
