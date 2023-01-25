"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    generateRandom() {
        const randomNumber = Math.floor(Math.random());
        return jsonwebtoken_1.default.sign({ randomNumber }, process.env.JWT_SECRET);
    }
}
exports.default = new TokenService();
//# sourceMappingURL=index.js.map