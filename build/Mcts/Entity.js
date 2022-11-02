"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectID = void 0;
class Entity {
    static SpawnEntity(entityId, position, nbt) {
        if (!position) {
            position = {
                x: 0,
                y: 0,
                z: 0
            };
        }
        else {
            position.x = position.x || 0;
            position.y = position.y || 0;
            position.z = position.z || 0;
        }
        if (nbt) {
            return `summon ${entityId} ~${position.x} ~${position.y} ~${position.z} ${JSON.stringify(nbt)}`;
        }
        return `summon ${entityId} ~${position.x} ~${position.y} ~${position.z}`;
    }
}
exports.default = Entity;
var EffectID;
(function (EffectID) {
    EffectID[EffectID["Speed"] = 1] = "Speed";
    EffectID[EffectID["Slowness"] = 2] = "Slowness";
    EffectID[EffectID["Haste"] = 3] = "Haste";
    EffectID[EffectID["MiningFatigue"] = 4] = "MiningFatigue";
    EffectID[EffectID["Strength"] = 5] = "Strength";
    EffectID[EffectID["InstantHealth"] = 6] = "InstantHealth";
    EffectID[EffectID["InstantDamage"] = 7] = "InstantDamage";
    EffectID[EffectID["JumpBoost"] = 8] = "JumpBoost";
    EffectID[EffectID["Nausea"] = 9] = "Nausea";
    EffectID[EffectID["Regeneration"] = 10] = "Regeneration";
    EffectID[EffectID["Resistance"] = 11] = "Resistance";
    EffectID[EffectID["FireResistance"] = 12] = "FireResistance";
    EffectID[EffectID["WaterBreathing"] = 13] = "WaterBreathing";
    EffectID[EffectID["Invisibility"] = 14] = "Invisibility";
    EffectID[EffectID["Blindness"] = 15] = "Blindness";
    EffectID[EffectID["NightVision"] = 16] = "NightVision";
    EffectID[EffectID["Hunger"] = 17] = "Hunger";
    EffectID[EffectID["Weakness"] = 18] = "Weakness";
    EffectID[EffectID["Poison"] = 19] = "Poison";
    EffectID[EffectID["Wither"] = 20] = "Wither";
    EffectID[EffectID["HealthBoost"] = 21] = "HealthBoost";
    EffectID[EffectID["Absorption"] = 22] = "Absorption";
    EffectID[EffectID["Saturation"] = 23] = "Saturation";
    EffectID[EffectID["Glowing"] = 24] = "Glowing";
    EffectID[EffectID["Levitation"] = 25] = "Levitation";
    EffectID[EffectID["Luck"] = 26] = "Luck";
    EffectID[EffectID["Unluck"] = 27] = "Unluck";
    EffectID[EffectID["SlowFalling"] = 28] = "SlowFalling";
    EffectID[EffectID["ConduitPower"] = 29] = "ConduitPower";
    EffectID[EffectID["DolphinsGrace"] = 30] = "DolphinsGrace";
    EffectID[EffectID["BadOmen"] = 31] = "BadOmen";
    EffectID[EffectID["HeroOfTheVillage"] = 32] = "HeroOfTheVillage";
    EffectID[EffectID["Darkness"] = 33] = "Darkness";
})(EffectID = exports.EffectID || (exports.EffectID = {}));
