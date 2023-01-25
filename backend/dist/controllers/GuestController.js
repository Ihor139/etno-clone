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
class GuestController {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cookieToken = req.cookies.userToken;
                const dbToken = yield service_1.GuestService.findToken(cookieToken);
                if (cookieToken && dbToken) {
                    res.status(200);
                    res.send({
                        message: dbToken
                    });
                    return;
                }
                const token = service_1.TokenService.generateRandom();
                const guest = yield service_1.GuestService.add(token);
                res.cookie("userToken", token);
                res.json(guest);
            }
            catch (error) {
                res.status(500).json({
                    message: "Failed to register guest",
                });
            }
        });
    }
}
exports.default = new GuestController();
//# sourceMappingURL=GuestController.js.map