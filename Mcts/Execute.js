"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Execute {
    constructor(baseExecute, command) {
        this.command = "";
        this.baseExecute = "";
        this.baseExecute = baseExecute;
        this.command = command;
    }
    As(selector) {
        this.baseExecute += ` as ${selector}`;
        return this;
    }
    At(selector) {
        this.baseExecute += ` at ${selector}`;
        return this;
    }
    AsAt(selector) {
        this.baseExecute += ` as ${selector} at @s`;
        return this;
    }
    If(condition) {
        if (condition.startsWith("!")) {
            this.baseExecute += ` unless ${condition.substring(1)}`;
        }
        else {
            this.baseExecute += ` if ${condition}`;
        }
        return this;
    }
    Positioned(x, y, z, relative = false) {
        this.baseExecute += ` positioned ${relative ? "~" : ""}${x} ${relative ? "~" : ""}${y} ${relative ? "~" : ""}${z}`;
        return this;
    }
    PositionedView(x, y, z) {
        this.baseExecute += ` positioned ^${x} ^${y} ^${z}`;
        return this;
    }
    Anchored(eyes = false) {
        this.baseExecute += ` anchored ${eyes ? "eyes" : "feet"}`;
        return this;
    }
    Build() {
        return `${this.baseExecute} run ${this.command}`;
    }
    // Static methods
    static As(selector, command) {
        return new Execute(`execute as ${selector}`, command);
    }
    static At(selector, command) {
        return new Execute(`execute at ${selector}`, command);
    }
    static AsAt(selector, command) {
        return new Execute(`execute as ${selector} at @s`, command);
    }
    static If(condition, command) {
        if (condition.startsWith("!")) {
            return new Execute(`execute unless ${condition.substring(1)}`, command);
        }
        return new Execute(`execute if ${condition}`, command);
    }
    static Anchored(eyes, command) {
        return new Execute(`execute anchored ${eyes ? "eyes" : "feet"}`, command);
    }
}
exports.default = Execute;
