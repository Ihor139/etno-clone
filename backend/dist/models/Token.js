"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const TokenSchema = new mongoose.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    refreshToken: { type: String, unique: true, required: true },
});
exports.default = mongoose.model("Token", TokenSchema);
//# sourceMappingURL=Token.js.map