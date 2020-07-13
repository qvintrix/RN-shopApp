import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
const rootReducer = combineReducers({
  products: productReducer,
});
const store = createStore(rootReducer);
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
