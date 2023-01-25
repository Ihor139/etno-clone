import {Schema} from "mongoose";

const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: "User"},
	refreshToken: {type: String, unique: true, required: true},
});

export default mongoose.model("Token", TokenSchema);
