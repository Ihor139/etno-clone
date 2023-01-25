import { Post } from "./types";
// вынесли асинхронную логику получения данных с UI в redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsPreview = createAsyncThunk("/posts", async () => {
  const { data } = await axios.get<Post[]>("/posts");
  return data;
});
