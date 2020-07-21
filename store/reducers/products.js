import PRODUCTS from '../../data/dummy-data';
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from '../actions/products';
import Product from '../../models/product';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price,
      );

      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIdx = state.userProducts.findIndex(
        (prod) => prod.id === action.pid,
      );

      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIdx].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIdx].price,
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIdx] = updatedProduct;
      const availableProductIdx = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid,
      );

      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIdx] = updatedProduct;

      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid,
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid,
        ),
      };
  }
  return state;
};
