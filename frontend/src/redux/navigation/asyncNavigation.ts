import { Item } from "./types";
// вынесли асинхронную логику получения данных с UI в redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNavigation = createAsyncThunk("/api/navigation", async () => {
  const { data } = await axios.get<Item[]>("/api/navigation");
  return data;
});
