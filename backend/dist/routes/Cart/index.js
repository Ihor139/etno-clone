"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
router.get("/get-cart", controllers_1.CartController.get);
router.post("/cart", controllers_1.CartController.add);
router.post("/cart/remove", controllers_1.CartController.remove);
router.post("/cart/update", controllers_1.CartController.update);
exports.default = router;
//# sourceMappingURL=index.js.map