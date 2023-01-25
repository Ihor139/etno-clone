import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CartGroup, CartItemNew} from "./types";

export const fetchCart = createAsyncThunk("getCart", async () => {
	const {data} = await axios.get<CartGroup>("/api/cart");
	return data;
});

export const addToCart = createAsyncThunk("addToCart", async (product: CartItemNew) => {
	const {data} = await axios.post<CartGroup>("/api/cart", product);
	return data;
});

export const removeFromCart = createAsyncThunk("removeFromCart", async (product: { _id: string }) => {
	const {data} = await axios.post<CartGroup>("/api/cart/remove", product);
	return data;
});

export const updateQuantity = createAsyncThunk("updateQuantity", async (product: { _id: string, amount: number }) => {
	const {data} = await axios.post<CartGroup>("/api/cart/update", product);
	return data;
});
