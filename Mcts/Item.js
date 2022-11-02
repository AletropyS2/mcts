"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideFlagsId = void 0;
const Selector_1 = require("./Selector");
class Item {
    static GiveItem(item, count, nbt) {
        return Item.GiveItemTo(Selector_1.Selectors.Self, item, count, nbt);
    }
    static GiveItemTo(selector, item, count, nbt) {
        if (nbt) {
            return `give ${selector} ${item}${JSON.stringify(nbt)} ${count}`;
        }
        return `give ${selector} ${item} ${count}`;
    }
    static SpawnItem(item, count, position, relativePos = false, nbt) {
        if (nbt) {
            return `summon item ${relativePos ? "~" : ""}${position.x} ${relativePos ? "~" : ""}${position.y} ${relativePos ? "~" : ""}${position.z} {Item:{id:"${item}",Count:${count}b,tag:${JSON.stringify(nbt)}}}`;
        }
        else {
            return `summon item ${relativePos ? "~" : ""}${position.x} ${relativePos ? "~" : ""}${position.y} ${relativePos ? "~" : ""}${position.z} {Item:{id:"${item}",Count:${count}b}}`;
        }
    }
}
exports.default = Item;
var HideFlagsId;
(function (HideFlagsId) {
    HideFlagsId[HideFlagsId["HideEnchantments"] = 1] = "HideEnchantments";
    HideFlagsId[HideFlagsId["HideAttributes"] = 2] = "HideAttributes";
    HideFlagsId[HideFlagsId["HideUnbreakable"] = 4] = "HideUnbreakable";
    HideFlagsId[HideFlagsId["HideCanDestroy"] = 8] = "HideCanDestroy";
    HideFlagsId[HideFlagsId["HideCanPlace"] = 16] = "HideCanPlace";
    HideFlagsId[HideFlagsId["HideMiscellaneous"] = 32] = "HideMiscellaneous";
})(HideFlagsId = exports.HideFlagsId || (exports.HideFlagsId = {}));
