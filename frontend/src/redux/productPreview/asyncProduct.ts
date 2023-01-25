import {Product} from "./types";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsPreview = createAsyncThunk("/products/new", async () => {
  const { data } = await axios.get<Product[]>("/products/new");
  return data;
});
