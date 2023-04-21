import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // console.log(action);
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          cartitems: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    decrementCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    incrementCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity++;
      state.totalQuantity++;
      state.totalPrice += existingItem.price;
    },

    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  incrementCart,
  decrementCart,
  replaceCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
