import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      renderItem={({item}) => (
        <OrderItem
          key={item.productId}
          amount={item.totalAmount}
          date={item.readableDate}
          items={item.items}
        />
      )}
    />
  );
};

export default OrdersScreen;
