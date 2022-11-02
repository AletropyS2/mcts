"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loop {
    static For(min, max, ...commands) {
        let content = "";
        for (let i = min; i < max; i++) {
            content += commands.join("\r\n").replace(/\$i/g, i.toString());
            content += "\r\n";
        }
        return content;
    }
}
exports.default = Loop;
