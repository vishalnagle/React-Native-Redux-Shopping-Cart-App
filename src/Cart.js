import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {removeItemFromCart} from './redux/action/Actions';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();

  const DeleteItems = item => {
    console.log('DeleteItems  --> ', item);
    dispatch(removeItemFromCart(item));
  };

  const items = useSelector(state => state.Reducers);

  console.log('cart Items --> ', items);
  const renderItem = ({item, index}) => (
    <View
      style={{
        marginBottom: 20,
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
      }}>
      <Image
        source={{uri: item.thumbnail}}
        style={{width: '100%', height: 190, resizeMode: 'contain'}}
      />
      <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <Text style={{fontSize: 20, color: '#414743'}}>{item.name}</Text>
        <Text style={{fontSize: 20, paddingBottom: 10, color: '#414743'}}>
          {item.price}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          height: 30,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          DeleteItems(index);
        }}>
        <Text style={{color: 'white', fontSize: 15}}>Delete Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={{backgroundColor: 'green', height: 50, width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              marginRight: 20,
              borderRadius: 50,
              justifyContent: 'center',
              width: 100,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 1
            }}>
            <Image source={require('../assets/cart.png')} resizeMode='contain'/>
            <Text style={{fontSize: 26, fontWeight: '600', color: '#000'}}>{items.length}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Cart;
