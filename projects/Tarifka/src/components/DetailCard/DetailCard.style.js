import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover',
  },
  inner_container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A52A2A',
    paddingLeft: 5,
  },
  seperator: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#A52A2A',  
    marginVertical:5,
  },
  desc: {
    paddingLeft: 5,
    fontSize: 16,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  button_text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
