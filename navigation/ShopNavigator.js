import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform} from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const defaultStackNavOptions = {
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
};

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab =
//   Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator()
//     : createBottomTabNavigator();

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
            title: 'ProductsOverview',
            // headerLeft: () => (
            //   <Icon.Button
            //     name="menu"
            //     size={25}
            //     backgroundColor="transparent"
            //     color={Colors.primaryColor}
            //     underlayColor="transparent"
            //     onPress={() => {
            //       navData.navigation.toggleDrawer();
            //     }}
            //   />
            // ),
          };
        }}
      />
      {/* <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({route}) => {
          const catId = route.params.categoryId;
          const {title} = CATEGORIES.find(cat => cat.id === catId);
          return {
            title,
          };
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => {
          const title = route.params.mealTitle;
          const toggleHandler = route.params.toggleFav;

          return {
            title,
            headerRight: () => (
              <Icon.Button
                name="star"
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={toggleHandler}
              />
            ),
          };
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default ProductsNavigator;
