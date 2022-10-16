import {FlatList, StyleSheet, Text, View} from 'react-native';

import Product from './src/components/Product';
import SearchBar from './src/components/SearchBar';
import productData from './src/assets/product_data.json';

const App = () => {
  const renderProducts = ({item}) => <Product products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>PATIKASTORE</Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => <SearchBar />}
        keyExtractor={item => item.id.toString()}
        data={productData}
        renderItem={renderProducts}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  textHeader: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 36,
    marginLeft: 10,
  },
});
