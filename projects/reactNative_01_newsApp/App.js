import {FlatList, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import news_data from './src/news_data.json';

import NewsCard from './src/components/NewsCard';
import NewsBanner from './src/components/NewsBanner';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <View>
      {/*
        // FlatList componenti yoğun bir kullanım olduğunda tercih edilmeli
        // kullanıcının ekranda görmesi gerek kadar veriyi ayarlayan özel componentdir
        // data ve renderItem propsları zorunludur(dökümandan incelenmeli)
        // https://reactnative.dev/docs/flatlist
        // data => ekrana ne basmak istersek onun array formatındaki hali
        // renderItem => ekrana komponenti nasıl basmak istiyorsak bize o noktada yardımcı olan callback function-5 veri varsa renderItem 5 kez tetiklendir ve ekrana veriyi basar.
        // keyExtractor property hangi verilerin gösterilip gösterilmeyeceğini ayarlamaya yarak verileri alır.eğer string değilse id kısmı toString() metodu ile stringe çevrilmelidir.(instagramda aşağı doğru verilerin yüklenmesi buna örnektir)
        // renderItem ı dışarıda belirlemek bestpractise çünkü veriler çoğaldıkça verileri render etme sayısı azalıyor.

      */}
      {/* for example FlatList */}
      {/* <FlatList
        data = {[1,2,3,4,5]}
        renderItem = {(data) => <Text> {data.item </Text>}
        renderItem = {({item}) => <Text>{item} </Text>}
      /> */}
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <NewsBanner />}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#eceff1',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 54,
    color: 'black',
  },
});

export default App;
