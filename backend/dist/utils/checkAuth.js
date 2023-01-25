"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/** 6.1 middleware, проверяем можно ли возвращать пользователю информацию о себе */
exports.default = (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    if (token) {
        try {
            /** расшифруем токен */
            const decoded = jsonwebtoken_1.default.verify(token, "secret321");
            // @ts-ignore
            req.userId = decoded._id;
            /** next() запускает следующую функцию (res())*/
            next();
        }
        catch (error) {
            return res.status(403).json({
                message: "Нет доступа",
            });
        }
    }
    else {
        return res.status(403).json({
            message: "Нет доступа",
        });
    }
};
//# sourceMappingURL=checkAuth.js.map