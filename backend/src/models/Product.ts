import mongoose from "mongoose";
import {Product} from "../types";

export const ProductSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		prodId: {
			type: Number,
			required: true,
		},
		category: {
			type: Array,
			default: [],
			required: true,
		},
		price: {
			base: {
				type: Number,
				required: true,
			},
			currency: {
				type: String,
				required: true,
			},
		},
		size: String,
		amount: Number,
		features: Array,
		colors: Array,
		images: Array,
		title: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<Product & mongoose.Document>("Product", ProductSchema);
