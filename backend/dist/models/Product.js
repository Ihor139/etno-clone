"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Product", exports.ProductSchema);
//# sourceMappingURL=Product.js.map