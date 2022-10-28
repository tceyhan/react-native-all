/* eslint-disable prettier/prettier */
import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara.."
        onChangeText={onSearch}
        placeholderTextColor={'red'}
      />
    </View>
  );
};

export default SearchBar;
