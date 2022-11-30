import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
    height: windowHeight / 4,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  title_container: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop:-20,
    alignItems: 'center',
  },
  title: {
    fontweight: 'bold',
    fontSize: 20,
    color: 'white',
    paddingVertical: 5,
  },
});
