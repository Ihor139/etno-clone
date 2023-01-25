"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NavigationShema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    dataImage: {
        type: String,
        required: true
    },
    submenu: {
        type: Array,
        default: [],
        nested: {
            id: {
                type: Number,
                required: true,
            },
            dataImage: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
        },
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Navigation", NavigationShema);
//# sourceMappingURL=Navigation.js.map