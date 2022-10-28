/* eslint-disable prettier/prettier */
import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';
import Category from '../Category';

const SearchBar = ({handleSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara.."
        onChangeText={handleSearch}
        placeholderTextColor={'white'}
        style={styles.searchInput}
        // value={value}
      />
      <Category />
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>X</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SearchBar;
