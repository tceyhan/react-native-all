/* eslint-disable prettier/prettier */
import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';
import Category from '../Category';

const SearchBar = ({onChange, value, setNewList, data}) => {
  console.log(value);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara.."
        onChangeText={onChange}
        placeholderTextColor={'white'}
        style={styles.searchInput}
        value={value}
      />
      {value ? '' : <Category setNewList={setNewList} dataList={data} />}
    </View>
  );
};

export default SearchBar;
