"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
//admin routes
// router.post("/products/create", multerInstance.upload.single('image'), ProductController.create);
// router.get("/products/update/:id", ProductController.update);
// router.get("/products/remove/:id", ProductController.remove);
router.get("/products", controllers_1.ProductController.getAll);
router.get("/products/new", controllers_1.ProductController.getNew);
router.get("/products/:id", controllers_1.ProductController.getOne);
exports.default = router;
//# sourceMappingURL=index.js.map