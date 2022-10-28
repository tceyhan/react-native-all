/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {padding: 10},
  desc: {fontStyle: 'italic', fontSize:20},
  title: {fontWeight: 'bold', fontSize: 25, marginvertical: 5, color:'#af4448'},
  price: {fontWeight: 'bold', fontSize: 22, textAlign: 'right'},
});
