/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  owner: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    color: 'navy',
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  user_container: {
    marginHorizontal:5,
    borderRadius:10,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fullName: {
    borderRadius: 20,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  logoutIcon: {
    marginLeft:20,
  },
});
