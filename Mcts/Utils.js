"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateUUID = void 0;
const crypto_1 = require("crypto");
function GenerateUUID() {
    const uuid = (0, crypto_1.randomUUID)().replace(/-/g, ",").toUpperCase();
    return `[I;${uuid}]`;
}
exports.GenerateUUID = GenerateUUID;
