/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {ScrollView, Image, StyleSheet, Dimensions, View} from 'react-native';
import news_data_banner from '../news_banner_data.json';

const NewsBanner = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {news_data_banner.map(bannerNews => (
          <Image
            key={bannerNews.id}
            style={styles.banner_image}
            source={{uri: bannerNews.imageUrl}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NewsBanner;

const styles = StyleSheet.create({
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});
