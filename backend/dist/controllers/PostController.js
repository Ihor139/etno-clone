"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../service/Post"));
class PostController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield Post_1.default.getAll();
                res.json(posts);
            }
            catch (error) {
                res.status(500).json({
                    message: "Не удалось получить статьи",
                });
            }
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = Post_1.default.getOne(req.params.id);
                res.json(post);
            }
            catch (error) {
                res.status(500).json({
                    message: "Failed to receive post",
                });
            }
        });
    }
    ;
}
exports.default = new PostController();
//# sourceMappingURL=PostController.js.map