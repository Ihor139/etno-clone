"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function default_1(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    next();
}
exports.default = default_1;
//# sourceMappingURL=handleValidationErrors.js.map