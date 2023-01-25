import { Product } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("/api/search", async (key: string) => {
  const { data } = await axios.get<Product[]>(`/api/search/${key}`);
  return data;
});
