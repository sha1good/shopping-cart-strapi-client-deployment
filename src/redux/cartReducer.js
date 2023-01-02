import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
