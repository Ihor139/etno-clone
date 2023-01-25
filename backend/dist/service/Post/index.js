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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
class PostService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.PostModel.find();
        });
    }
    ;
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('ID is not specified');
            }
            models_1.PostModel.findOneAndUpdate({
                _id: id,
            }, {
                $inc: { viewsCount: 1 },
            }, {
                returnDocument: 'after'
            }, (err, doc) => {
                if (err) {
                    throw new Error("Failed to receive post");
                }
                if (!doc) {
                    throw new Error("Article not found");
                }
                return doc;
            });
        });
    }
    ;
}
exports.default = new PostService();
//# sourceMappingURL=index.js.map