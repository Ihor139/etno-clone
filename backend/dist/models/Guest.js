"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GuestSchema = new mongoose_1.default.Schema({
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
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Product',
            },
            sizes: Array,
        }],
    /**
     * add expired time
     */
}, { collection: 'guests' });
exports.default = mongoose_1.default.model("Guest", GuestSchema);
//# sourceMappingURL=Guest.js.map