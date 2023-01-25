import { Item } from "./types";
// вынесли асинхронную логику получения данных с UI в redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNavigation = createAsyncThunk("/navigation", async () => {
  const { data } = await axios.get<Item[]>("/navigation");
  return data;
});
