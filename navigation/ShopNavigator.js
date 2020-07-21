import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform} from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProducts';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const defaultStackNavOptions = {
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ProductsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ProductsOverview"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={(navData) => {
          return {
            title: 'All Products',
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            ),
            headerRight: () => (
              <Icon.Button
                name="cart"
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navData.navigation.navigate('CartScreen');
                }}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={({route}) => {
          const title = route.params.productTitle;
          return {
            title,
          };
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={(navData) => {
          return {
            title: 'Your Cart',
          };
        }}
      />
    </Stack.Navigator>
  );
}

function OrdersNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OrdersScreen"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={(navData) => {
          return {
            title: 'Your Orders',
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

function AdminNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="UserProducts"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={({route, navigation}) => {
          const submitHandler = route.params ? route.params.submit : undefined;
          return {
            title: 'Your Products',
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            ),
            headerRight: () => (
              <Icon.Button
                name="pencil"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navigation.navigate('EditProductScreen', {
                    submit: submitHandler,
                  });
                }}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={({route, navigation}) => {
          const title = route.params ? route.params.productId : '';
          const submitHandler = route.params.submit;
          return {
            title: title ? 'Edit Product' : 'Add Product',
            headerRight: () => (
              <Icon.Button
                name="check-bold"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={submitHandler}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: Colors.primaryColor,
      }}>
      <Drawer.Screen
        name="ProductsNavigator"
        component={ProductsNavigator}
        options={{
          title: 'Products',
          drawerIcon: ({focused, color, size}) => {
            return <Icon name="cart" color={color} size={23} />;
          },
        }}
      />
      <Drawer.Screen
        name="OrdersNavigator"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          drawerIcon: ({focused, color, size}) => {
            return <Icon name="format-list-bulleted" color={color} size={23} />;
          },
        }}
      />
      <Drawer.Screen
        name="AdminNavigator"
        component={AdminNavigator}
        options={{
          title: 'Admin',
          drawerIcon: ({focused, color, size}) => {
            return <Icon name="pencil" color={color} size={23} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default MainNavigator;
