import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts: any = createAsyncThunk(
  "productsSlice/getProducts",
  async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    return data.data;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default productsSlice.reducer;
