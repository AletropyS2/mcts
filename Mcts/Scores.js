"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Package_1 = __importDefault(require("./Package"));
class Scores {
    static Define(name, criteria) {
        if (criteria) {
            Package_1.default.AppendLoad(`scoreboard objectives add ${name} ${criteria}`);
        }
        else {
            Package_1.default.AppendLoad(`scoreboard objectives add ${name} dummy`);
        }
    }
    static Set(selector, name, value) {
        return `scoreboard players set ${selector} ${name} ${value}`;
    }
    static Add(selector, name, value) {
        return `scoreboard players add ${selector} ${name} ${value}`;
    }
    static Remove(selector, name, value) {
        return `scoreboard players remove ${selector} ${name} ${value}`;
    }
    static Reset(selector, name) {
        return `scoreboard players reset ${selector} ${name}`;
    }
}
exports.default = Scores;
