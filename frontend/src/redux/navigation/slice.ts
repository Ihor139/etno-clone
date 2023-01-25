import { fetchNavigation } from "./asyncNavigation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, NavigationSliceState } from "./types";
import {Status} from "../../@types";

const initialState: NavigationSliceState = {
  menuItems: [],
  status: Status.LOADING
};

export const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchNavigation.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchNavigation.fulfilled,
      (state, action: PayloadAction<Item[]>) => {
        state.menuItems = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchNavigation.rejected, (state, action) => {
      state.menuItems = [];
      state.status = Status.ERROR;
    });
  },
});

export default slice.reducer;
