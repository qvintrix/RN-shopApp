import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/products';
import CartReducer from './store/reducers/cart';
import OrderReducer from './store/reducers/orders';

import ShopNavigator from './navigation/ShopNavigator';
import {composeWithDevTools} from 'redux-devtools-extension';
const rootReducer = combineReducers({
  products: productReducer,
  cart: CartReducer,
  orders: OrderReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
