import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/header/Header';
import Footer from './src/footer/Footer';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const onChange = () =>{
    setText(text);
  };

  const todoRender = ({item}) => <Text>{item.text}</Text>;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={todoList} renderItem={todoRender} />
      <Footer onChange={onChange} text={text} />
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
