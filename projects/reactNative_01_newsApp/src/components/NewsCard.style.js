import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  description: {
    marginTop: 3,
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 10,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'blueviolet',
  },
  inner_container: {
    padding: 5,
  },
});
