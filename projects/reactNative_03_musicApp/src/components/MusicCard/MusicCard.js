/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MusicCard.style';

const MusicCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
        <Text style={styles.album}>Albüm</Text>
      </View>
    </View>
  );
};

export default MusicCard;
