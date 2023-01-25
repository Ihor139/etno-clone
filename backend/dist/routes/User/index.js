"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
router.post("/user/registration", controllers_1.UserController.register);
router.post('/user/login', controllers_1.UserController.login);
router.post("/user/logout", controllers_1.UserController.logout);
router.post("/user/update", controllers_1.UserController.update);
router.post("/user/remove", controllers_1.UserController.remove);
exports.default = router;
//# sourceMappingURL=index.js.map