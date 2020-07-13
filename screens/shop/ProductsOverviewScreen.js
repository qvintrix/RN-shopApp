import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  console.log(products);
  return (
    <FlatList
      data={products}
      renderItem={({item: {title}}) => <Text>{title}</Text>}
    />
  );
};

export default ProductsOverviewScreen;
