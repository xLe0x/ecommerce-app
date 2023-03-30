import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
