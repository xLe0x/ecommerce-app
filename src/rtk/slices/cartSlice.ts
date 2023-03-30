import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state: any, action) => {
      state.push(action.payload);
      return state;
    },
    deleteFromCart: (state, action) => {
      return state.filter((product: any) => product.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
