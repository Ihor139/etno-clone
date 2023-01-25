"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRouter = exports.UserRouter = exports.SearchRouter = exports.PostRouter = exports.NavigationRouter = exports.CartRouter = exports.ProductRouter = void 0;
var Product_1 = require("./Product");
Object.defineProperty(exports, "ProductRouter", { enumerable: true, get: function () { return __importDefault(Product_1).default; } });
var Cart_1 = require("./Cart");
Object.defineProperty(exports, "CartRouter", { enumerable: true, get: function () { return __importDefault(Cart_1).default; } });
var Navigation_1 = require("./Navigation");
Object.defineProperty(exports, "NavigationRouter", { enumerable: true, get: function () { return __importDefault(Navigation_1).default; } });
var Post_1 = require("./Post");
Object.defineProperty(exports, "PostRouter", { enumerable: true, get: function () { return __importDefault(Post_1).default; } });
var Search_1 = require("./Search");
Object.defineProperty(exports, "SearchRouter", { enumerable: true, get: function () { return __importDefault(Search_1).default; } });
var User_1 = require("./User");
Object.defineProperty(exports, "UserRouter", { enumerable: true, get: function () { return __importDefault(User_1).default; } });
var Guest_1 = require("./Guest");
Object.defineProperty(exports, "GuestRouter", { enumerable: true, get: function () { return __importDefault(Guest_1).default; } });
//# sourceMappingURL=index.js.map