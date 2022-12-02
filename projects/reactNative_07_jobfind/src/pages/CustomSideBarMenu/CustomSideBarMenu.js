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

const CustomSideBarMenu = props => {
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
        activeTintColor="#c44"
          icon={() => (
            <Icon
              color="white"
              size={35}
              name="github"
            />
          )}
          label="Visit Us"
          onPress={() =>
            Linking.openURL('https://github.com/tceyhan?tab=repositories')
          }
        />
      </DrawerContentScrollView>
      <Text style={styles.owner}>Tarık CEYHAN Ⓒ{new Date().getFullYear()}</Text>
    </View>
  );
};

export default CustomSideBarMenu;
