import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemsToCart} from './redux/action/Actions';

const projects = [
  {
    id: 1,
    name: 'Campus Shoes',
    price: '$100',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail:
      'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
  },
  {
    id: 2,
    name: 'Gaming Monitor',
    price: '$250',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    thumbnail: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  },
  {
    id: 3,
    name: 'Bass Speaker',
    price: '$200',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail:
      'https://motorolaus.vtexassets.com/arquivos/garage-power-single-family-image.png',
  },
  {
    id: 4,
    name: 'Amazon Echo',
    price: '$150',
    image:
      'https://images-static.nykaa.com/media/catalog/product/2/8/28f9980amaac00000005_1.jpg',
    thumbnail:
      'https://i.gadgets360cdn.com/products/large/amazon-echo-dot-5th-gen-db-812x799-1677735398.jpg',
  },
  {
    id: 5,
    name: 'Iphone 14',
    price: '$150',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail:
      'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
  },
  // Add more project objects as needed
];

const Products = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const addedItem = useSelector(state => state.Reducers);

  const AddItems = item => {
    dispatch(addItemsToCart(item));
  };

  const renderCard = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => {
          AddItems(item);
        }}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cartButtonContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('CartScreen')}>
          <Image source={require('../assets/cart.png')} />
          <Text style={styles.cartItemCount}>{addedItem.length}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={projects}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartButtonContainer: {
    backgroundColor: 'green',
    height: 50,
    alignItems: 'flex-end',
  },
  cartButton: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginRight: 5,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cartItemCount: {
    fontSize: 20,
    padding: 2,
  },
  card: {
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
    margin: 40,
    padding: 40,
    height: 380,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 190,
    resizeMode: 'contain',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    fontSize: 20,
    color: '#414743',
  },
  price: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#414743',
  },
  addToCartButton: {
    backgroundColor: '#48a15e',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  addToCartButtonText: {
    color: 'white',
  },
});

export default Products;
