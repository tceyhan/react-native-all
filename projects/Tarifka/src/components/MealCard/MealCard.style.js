import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    width: windowWidth,
    height: windowHeight / 4,
  },
  name: {},
});
