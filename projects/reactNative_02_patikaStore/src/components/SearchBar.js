import {StyleSheet, TextInput, View} from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>      
      <TextInput
        style={styles.input}
        placeholder='Ara...'
        keyboardType='text'
      />
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 5,        
    backgroundColor: 'whitegray',
  }, 
  input: {
    backgroundColor:  "#eceff1",
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 18,
    height: 54,
  },
})
