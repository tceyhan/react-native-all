/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import styles from './Pagination.style';

const Pagination = ({page, setPage, data,loading}) => {
  const totalPage = Math.floor(data.page_count / 20);
  const increasePage = () => {
    return setPage(page + 1);
  };
  const decreasePage = () => {
    return page === 0 ? setPage(0) : setPage(page - 1);
  };
  return (
    <View style={styles.pagination_container}>
      {page > 0 && (
        <Button
          text="Previous"
          onPress={decreasePage}
          IconName="chevron-left"
          // bu isimler material_community_icons da olan isimler
          IconColor="white"
          loading={loading}
          IconLeft

          // burada true icon solda kalacak, eğer sağda kalmasını istiyorsan herhangi bir şey yazmana gerek yok
        />
      )}
      <View style={styles.page_container}>
        <Text style={styles.page}>
          {page + 1} / {totalPage}
        </Text>
      </View>
      {page < totalPage && (
        <Button
          text="Next"
          onPress={increasePage}
          IconName="chevron-right"
          IconColor="white"
          loading={loading}
        />
      )}
    </View>
  );
};

export default Pagination;
