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
const Search_1 = __importDefault(require("../service/Search"));
class SearchController {
    constructor() {
        this.getResult = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productsGroup = yield Search_1.default.getResult(req.params.key);
                const result = productsGroup.map(list => {
                    return list.items[0];
                });
                res.json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    message: "Not found",
                });
            }
        });
    }
}
exports.default = new SearchController();
//# sourceMappingURL=SearchController.js.map