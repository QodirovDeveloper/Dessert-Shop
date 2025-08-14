import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find((p) => p.id === action.payload.id);
      if (existing) {
        existing.amount += 1;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }
      state.totalCount += 1;
    },
    increaseQty: (state, action) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        item.amount += 1;
        state.totalCount += 1;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
          state.totalCount -= 1;
        } else {
          state.products = state.products.filter((p) => p.id !== action.payload);
          state.totalCount -= 1;
        }
      }
    },
    removeFromCart: (state, action) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        state.totalCount -= item.amount;
      }
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
