import { fetchProductsPreview } from "./asyncProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Product, ProductPreviewSliceState} from "./types";
import {Status} from "../../@types";

const initialState: ProductPreviewSliceState = {
  items: [],
  status: Status.LOADING
};

export const slice = createSlice({
  name: "productPreview",
  initialState,
  reducers: {},
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchProductsPreview.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchProductsPreview.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchProductsPreview.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export default slice.reducer;
