import { fetchPostsPreview } from "./asyncPosts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostsPreviewSliceState, Post } from "./types";
import {Status} from "../../@types";

const initialState: PostsPreviewSliceState = {
  posts: [],
  status: Status.LOADING
};

export const slice = createSlice({
  name: "postsPreview",
  initialState,
  reducers: {},
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchPostsPreview.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchPostsPreview.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchPostsPreview.rejected, (state, action) => {
      state.posts = [];
      state.status = Status.ERROR;
    });
  },
});

export default slice.reducer;
