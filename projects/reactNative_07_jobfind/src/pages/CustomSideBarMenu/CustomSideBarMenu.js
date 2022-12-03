/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, Linking} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import styles from './CustomSideBarMenu.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeUser} from '../../redux/features/authSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const CustomSideBarMenu = props => {
  console.log('custom side bar', props.user);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRemove = () => {
    dispatch(removeUser);
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      {/*Top Large Image */}
      <Image
        source={require('../../assets/jobfind.png')}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          labelStyle={styles.label}
          drawerInactiveTintColor="navy"
          icon={() => <Icon color="white" size={35} name="github" />}
          label="Github"
          onPress={() =>
            Linking.openURL('https://github.com/tceyhan?tab=repositories')
          }
        />
        <DrawerItem
          labelStyle={styles.label}
          drawerInactiveTintColor="navy"
          icon={() => <Icon color="white" size={35} name="linkedin" />}
          label="Contact Me"
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/tarikceyhan/')
          }
        />
      </DrawerContentScrollView>
      <View  style={styles.user_container}>
        <Text style={styles.fullName}>
          {props.user.userFullName ? props.user.userFullName : 'Guest'}
        </Text>
        <Icon style={styles.logoutIcon} name="logout" size={30} color="white" onPress={handleRemove} />
      </View>

      <Text style={styles.owner}>Tarık CEYHAN Ⓒ{new Date().getFullYear()}</Text>
    </View>
  );
};

export default CustomSideBarMenu;
