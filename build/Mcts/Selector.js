"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selectors = void 0;
var Selectors;
(function (Selectors) {
    Selectors["AllPlayers"] = "@a";
    Selectors["All"] = "@e";
    Selectors["NearestPlayer"] = "@p";
    Selectors["RandomPlayer"] = "@r";
    Selectors["Self"] = "@s";
})(Selectors = exports.Selectors || (exports.Selectors = {}));
class Selector {
    constructor(selector, nbt) {
        this.selector = selector;
        this.nbt = nbt;
    }
    ToString() {
        if (this.nbt) {
            return `${this.selector}[${this.nbt}]`;
        }
        return `${this.selector}`;
    }
}
exports.default = Selector;
