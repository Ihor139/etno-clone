import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchItems } from "./asyncSearch";
import { Product, SearchSliceState } from "./types";
import {Status} from "../../@types";

const initialState: SearchSliceState = {
  value: "",
  result: [],
  status: Status.SUCCESS,
};

export const Slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //actions
    setSearchTerm(state, action) {
      state.value = action.payload;
    },
  },
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.result = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.result = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setSearchTerm } = Slice.actions;

export default Slice.reducer;
