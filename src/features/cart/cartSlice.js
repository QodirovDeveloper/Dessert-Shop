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
      const existing = state.products.find(p => p.id === action.payload.id);
      if (existing) {
        existing.amount += 1;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }
      state.totalCount++;
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload);
      if (index !== -1) {
        state.totalCount -= state.products[index].amount;
        state.products.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
