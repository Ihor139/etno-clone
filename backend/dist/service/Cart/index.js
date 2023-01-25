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
class CartService {
    getAll(userToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.GuestModel
                .findOne({ token: userToken })
                .populate({ path: 'products.product' })
                .exec(function (err, products) {
                if (err) {
                    console.log('error:' + err);
                }
                else {
                    return products;
                }
            });
        });
    }
    ;
    add(userToken, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const guest = yield models_1.GuestModel.findOneAndUpdate({
                token: userToken
            }, {
                $push: { products: product }
            });
            return guest && guest.products;
        });
    }
    remove(userToken, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.GuestModel.updateOne({ token: userToken }, {
                "$pull": {
                    "products": {
                        _id: id,
                    }
                }
            });
        });
    }
    update(userToken, id, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.GuestModel.findOneAndUpdate({
                token: userToken,
                "products._id": id
            }, {
                $set: {
                    "products.$.amount": amount
                },
            }, {
                returnDocument: 'after'
            });
        });
    }
}
exports.default = new CartService();
//# sourceMappingURL=index.js.map