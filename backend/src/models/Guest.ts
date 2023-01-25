import {Guest} from "../types";
import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
	token: {
		type: String,
		unique: true,
		required: true
	},
	products: [{
		size: String,
		amount: Number,
		sum: Number,
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
		sizes: Array,
	}],
	/**
	 * add expired time
	 */
}, {collection: 'guests'});


export default mongoose.model<Guest & mongoose.Document>("Guest", GuestSchema);
