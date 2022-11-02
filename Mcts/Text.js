"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverAction = exports.ClickAction = void 0;
var ClickAction;
(function (ClickAction) {
    ClickAction["OpenUrl"] = "open_url";
    ClickAction["RunCommand"] = "run_command";
    ClickAction["SuggestCommand"] = "suggest_command";
    ClickAction["ChangePage"] = "change_page";
    ClickAction["CopyToClipboard"] = "copy_to_clipboard";
})(ClickAction = exports.ClickAction || (exports.ClickAction = {}));
var HoverAction;
(function (HoverAction) {
    HoverAction["ShowText"] = "show_text";
    HoverAction["ShowItem"] = "show_item";
    HoverAction["ShowEntity"] = "show_entity";
})(HoverAction = exports.HoverAction || (exports.HoverAction = {}));
