import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const PreviousOrder = createSlice({
  name: "Previous",
  initialState,
  reducers: {
    addItemToPreviousOrder(state, action) {
      const newItems = action.payload;

      newItems.forEach((newItem) => {
        const existingItem = state.items.find((item) => item.id === newItem.id);
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            quantity: newItem.quantity,
          });
        } else {
          existingItem.quantity++;
        }
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      });
    },
    decrementPreviousOrder(state, action) {
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
    incrementPreviousOrder(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity++;
      state.totalQuantity++;
      state.totalPrice += existingItem.price;
    },
  },
});

export const {
  addItemToPreviousOrder,
  incrementPreviousOrder,
  decrementPreviousOrder,
} = PreviousOrder.actions;
export default PreviousOrder.reducer;
