"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
/**
 * список роутов
 */
router.get("/posts", controllers_1.PostController.getAll);
router.get("/posts/:id", controllers_1.PostController.getOne);
exports.default = router;
//# sourceMappingURL=index.js.map