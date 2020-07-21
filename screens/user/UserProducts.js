import React from 'react';
import {FlatList, Button, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import ProductItem from '../../components/shop/ProductItem';
import * as productsActions from '../../store/actions/products';
const UserProducts = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProduct = (id) => {
    props.navigation.navigate('EditProductScreen', {productId: id});
  };

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {
        text: 'No',
        style: 'default',
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => dispatch(productsActions.deleteProduct(id)),
      },
    ]);
  };
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => editProduct(item.id)}>
          <Button
            color={Colors.primaryColor}
            title="Edit"
            onPress={() => editProduct(item.id)}
          />
          <Button
            color={Colors.primaryColor}
            title="Delete"
            onPress={() => deleteHandler(item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProducts;
