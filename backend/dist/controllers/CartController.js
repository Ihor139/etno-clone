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
const service_1 = require("../service");
const models_1 = require("../models");
// TO DO -- Move logic to service
class CartController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cookieToken = req.cookies.userToken;
                const dbToken = yield service_1.GuestService.findToken(cookieToken);
                if (cookieToken && dbToken) {
                    yield models_1.GuestModel
                        .findOne({ token: cookieToken })
                        .populate({ path: 'products.product' })
                        .exec(function (err, products) {
                        if (err) {
                            console.log('error:' + err);
                        }
                        else {
                            products === null || products === void 0 ? void 0 : products.products.map(item => {
                                item.sum = item.amount * item.product.price.base;
                            });
                            const prices = products === null || products === void 0 ? void 0 : products.products.map(item => item.product.price.base * item.amount);
                            const total = prices === null || prices === void 0 ? void 0 : prices.reduce((partialSum, item) => partialSum + item, 0);
                            res.json(products);
                        }
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    message: "Failed to add product",
                });
            }
        });
    }
    ;
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cookieToken = req.cookies.userToken;
                if (cookieToken) {
                    const groupProduct = yield models_1.ProductModel.find({
                        prodId: req.body.prodId,
                    });
                    const sizeList = groupProduct.map(product => {
                        return {
                            [product.size]: product._id
                        };
                    });
                    const item = {
                        product: req.body._id,
                        size: req.body.size,
                        amount: req.body.amount,
                        sizes: sizeList
                    };
                    yield service_1.CartService.add(cookieToken, item);
                    yield models_1.GuestModel
                        .findOne({ token: cookieToken })
                        .populate({ path: 'products.product' })
                        .exec(function (err, products) {
                        if (err) {
                            console.log('error:' + err);
                        }
                        else {
                            products === null || products === void 0 ? void 0 : products.products.map(item => {
                                item.sum = item.amount * item.product.price.base;
                            });
                            const prices = products === null || products === void 0 ? void 0 : products.products.map(item => item.product.price.base * item.amount);
                            const total = prices === null || prices === void 0 ? void 0 : prices.reduce((partialSum, item) => partialSum + item, 0);
                            res.json(products);
                        }
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    message: "Failed to add product",
                });
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cookieToken = req.cookies.userToken;
                const dbToken = yield service_1.GuestService.findToken(cookieToken);
                if (cookieToken && dbToken) {
                    yield service_1.CartService.remove(cookieToken, req.body._id);
                    yield models_1.GuestModel
                        .findOne({ token: cookieToken })
                        .populate({ path: 'products.product' })
                        .exec(function (err, products) {
                        if (err) {
                            console.log('error:' + err);
                        }
                        else {
                            products === null || products === void 0 ? void 0 : products.products.map(item => {
                                item.sum = item.amount * item.product.price.base;
                            });
                            const prices = products === null || products === void 0 ? void 0 : products.products.map(item => item.product.price.base * item.amount);
                            const total = prices === null || prices === void 0 ? void 0 : prices.reduce((partialSum, item) => partialSum + item, 0);
                            res.json(products);
                        }
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    message: "Failed to remove product",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cookieToken = req.cookies.userToken;
                const dbToken = yield service_1.GuestService.findToken(cookieToken);
                if (cookieToken && dbToken) {
                    yield service_1.CartService.update(cookieToken, req.body._id, req.body.amount);
                    yield models_1.GuestModel
                        .findOne({ token: cookieToken })
                        .populate({ path: 'products.product' })
                        .exec(function (err, products) {
                        if (err) {
                            console.log('error:' + err);
                        }
                        else {
                            products === null || products === void 0 ? void 0 : products.products.map(item => {
                                item.sum = item.amount * item.product.price.base;
                            });
                            const prices = products === null || products === void 0 ? void 0 : products.products.map(item => item.product.price.base * item.amount);
                            const total = prices === null || prices === void 0 ? void 0 : prices.reduce((partialSum, item) => partialSum + item, 0);
                            res.json(products);
                        }
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    message: "Failed to update product",
                });
            }
        });
    }
}
exports.default = new CartController();
//# sourceMappingURL=CartController.js.map