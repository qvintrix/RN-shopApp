import React from 'react';
import {FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';
const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetailScreen', {
      productId: id,
      productTitle: title,
    });
  };
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => selectItemHandler(item.id, item.title)}>
          <Button
            color={Colors.primaryColor}
            title="View Details"
            onPress={() => selectItemHandler(item.id, item.title)}
          />
          <Button
            color={Colors.primaryColor}
            title="To Cart"
            onPress={() => dispatch(cartActions.addToCart(item))}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
