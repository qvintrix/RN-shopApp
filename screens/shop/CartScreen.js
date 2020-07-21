import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import CartItem from '../../components/shop/CartItem';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector(({cart}) => cart.totalAmount);
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => {
    const transformedCartItems = [];
    for (const key in cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: cart.items[key].productTitle,
        productPrice: cart.items[key].productPrice,
        quantity: cart.items[key].quantity,
        sum: cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1,
    );
  });

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summeryText}>
          Total:{' '}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        <Button
          color={Colors.accentColor}
          title="Order Now"
          disabled={!cartItems.length}
          onPress={() =>
            dispatch(orderActions.addOrder(cartItems, cartTotalAmount))
          }
        />
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={({item}) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            deletable
            onRemove={() =>
              dispatch(cartActions.removeFromCart(item.productId))
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
  },
  summeryText: {
    fontSize: 18,
  },
  amount: {
    color: Colors.primaryColor,
  },
});
export default CartScreen;
