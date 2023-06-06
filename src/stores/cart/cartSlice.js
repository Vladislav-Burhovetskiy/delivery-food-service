import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
// console.log("products: ", products)
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.amount++;
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload, amount: 1 }],
        };
      }
    },
    clearCart: (state) => {
      return { ...state, products: [] };
    },
    incrementProductAmount: (state, action) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id
            ? {
                ...product,
                amount: product.amount > 1 ? product.amount - 1 : 1,
              }
            : product
        ),
      };
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    },
    getTotalPrice: (state) => {
      const totalPrice = state.products.reduce(
        (accumulator, product) =>
          accumulator + product,
        0
      );
    
      return totalPrice;
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
  removeProduct,
  getTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
