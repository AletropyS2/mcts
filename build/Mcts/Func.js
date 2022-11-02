"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Package_1 = __importDefault(require("./Package"));
class Func {
    static Run(commands, name = null) {
        if (name == null) {
            name = `customfunc_${Func.totalFuncs}`;
        }
        Package_1.default.NewFile(name, ...commands);
        Func.totalFuncs++;
        return `function ${Package_1.default.Id}:${name}`;
    }
    static Of(name) {
        return `function ${Package_1.default.Id}:${name}`;
    }
}
exports.default = Func;
Func.totalFuncs = 0;
