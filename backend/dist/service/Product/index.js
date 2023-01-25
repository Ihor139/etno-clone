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
class ProductService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.ProductModel.aggregate([
                {
                    $group: {
                        _id: "$prodId",
                        items: {
                            $push: "$$ROOT"
                        }
                    }
                }
            ]);
        });
    }
    ;
    getNew() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield models_1.ProductModel.aggregate([
                {
                    $group: {
                        _id: "$prodId",
                        items: {
                            $push: "$$ROOT"
                        }
                    }
                }
            ]).sort({ _id: -1 }).limit(4);
            return products.map(product => {
                let prodSizes = [];
                product.items.forEach((item) => {
                    const key = item.size;
                    const size = {
                        [key]: item._id
                    };
                    prodSizes.push(size);
                });
                return Object.assign(Object.assign({}, product.items[0]), { sizes: prodSizes });
            });
        });
    }
    ;
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('ID is not specified');
            }
            return models_1.ProductModel.findOne({
                _id: id,
            });
        });
    }
    ;
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!product._id) {
                throw new Error('ID is not specified');
            }
            return models_1.ProductModel.findByIdAndUpdate(product._id, product, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('ID is not specified');
            }
            return models_1.ProductModel.findByIdAndDelete(id);
        });
    }
}
exports.default = new ProductService();
//# sourceMappingURL=index.js.map