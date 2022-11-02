"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleType = void 0;
class Particle {
    static From(options, relativePos = false) {
        let { type, position, delta, speed, force, count } = options;
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
        if (!delta) {
            delta = {
                x: 0,
                y: 0,
                z: 0
            };
        }
        else {
            delta.x = delta.x || 0;
            delta.y = delta.y || delta.x;
            delta.z = delta.z || delta.x;
        }
        if (!speed)
            speed = 0;
        if (!count)
            count = 1;
        return `particle ${type} ${relativePos ? "~" : ""}${position.x} ${relativePos ? "~" : ""}${position.y} ${relativePos ? "~" : ""}${position.z} ${delta.x} ${delta.y} ${delta.z} ${speed} ${count} ${force ? "force" : "normal"}`;
    }
}
exports.default = Particle;
var ParticleType;
(function (ParticleType) {
    ParticleType["AmbientEntityEffect"] = "minecraft:ambient_entity_effect";
    ParticleType["AngryVillager"] = "minecraft:angry_villager";
    ParticleType["Ash"] = "minecraft:ash";
    ParticleType["Barrier"] = "minecraft:barrier";
    ParticleType["Block"] = "minecraft:block";
    ParticleType["Bubble"] = "minecraft:bubble";
    ParticleType["BubblePop"] = "minecraft:bubble_pop";
    ParticleType["BubbleColumnUp"] = "minecraft:bubble_column_up";
    ParticleType["CampfireCosySmoke"] = "minecraft:campfire_cosy_smoke";
    ParticleType["CampfireSignalSmoke"] = "minecraft:campfire_signal_smoke";
    ParticleType["Cloud"] = "minecraft:cloud";
    ParticleType["Composter"] = "minecraft:composter";
    ParticleType["CrimsonSpore"] = "minecraft:crimson_spore";
    ParticleType["Crit"] = "minecraft:crit";
    ParticleType["CurrentDown"] = "minecraft:current_down";
    ParticleType["DamageIndicator"] = "minecraft:damage_indicator";
    ParticleType["Dolphin"] = "minecraft:dolphin";
    ParticleType["DragonBreath"] = "minecraft:dragon_breath";
    ParticleType["DrippinDripstoneLava"] = "minecraft:dripping_dripstone_lava";
    ParticleType["DrippingDripstoneWater"] = "minecraft:dripping_dripstone_water";
    ParticleType["DrippingLava"] = "minecraft:dripping_lava";
    ParticleType["DrippingObsidianTear"] = "minecraft:dripping_obsidian_tear";
    ParticleType["DrippingWater"] = "minecraft:dripping_water";
    ParticleType["Effect"] = "minecraft:effect";
    ParticleType["ElderGuardian"] = "minecraft:elder_guardian";
    ParticleType["EletricSpark"] = "minecraft:electric_spark";
    ParticleType["Enchant"] = "minecraft:enchant";
    ParticleType["EnchantedHit"] = "minecraft:enchanted_hit";
    ParticleType["EndRod"] = "minecraft:end_rod";
    ParticleType["EntityEffect"] = "minecraft:entity_effect";
    ParticleType["ExplosionEmitter"] = "minecraft:explosion_emitter";
    ParticleType["Explosion"] = "minecraft:explosion";
    ParticleType["FallingDripstoneLava"] = "minecraft:falling_dripstone_lava";
    ParticleType["FallingDripstoneWater"] = "minecraft:falling_dripstone_water";
    ParticleType["FallingDust"] = "minecraft:falling_dust";
    ParticleType["FallingLava"] = "minecraft:falling_lava";
    ParticleType["FallingObsidianTear"] = "minecraft:falling_obsidian_tear";
    ParticleType["FallingSporeBlossom"] = "minecraft:falling_spore_blossom";
    ParticleType["FallingWater"] = "minecraft:falling_water";
    ParticleType["Firework"] = "minecraft:firework";
    ParticleType["Fishing"] = "minecraft:fishing";
    ParticleType["Flame"] = "minecraft:flame";
    ParticleType["Flash"] = "minecraft:flash";
    ParticleType["Glow"] = "minecraft:glow";
    ParticleType["GlowSquidInk"] = "minecraft:glow_squid_ink";
    ParticleType["HappyVillager"] = "minecraft:happy_villager";
    ParticleType["Heart"] = "minecraft:heart";
    ParticleType["InstantEffect"] = "minecraft:instant_effect";
    ParticleType["Item"] = "minecraft:item";
    ParticleType["ItemSlime"] = "minecraft:item_slime";
    ParticleType["ItemSnowball"] = "minecraft:item_snowball";
    ParticleType["LandingLava"] = "minecraft:landing_lava";
    ParticleType["LandingObsidianTear"] = "minecraft:landing_obsidian_tear";
    ParticleType["LargeSmoke"] = "minecraft:large_smoke";
    ParticleType["Lava"] = "minecraft:lava";
    ParticleType["Light"] = "minecraft:light";
    ParticleType["Mycelium"] = "minecraft:mycelium";
    ParticleType["Nautilus"] = "minecraft:nautilus";
    ParticleType["Note"] = "minecraft:note";
    ParticleType["Poof"] = "minecraft:poof";
    ParticleType["Portal"] = "minecraft:portal";
    ParticleType["Rain"] = "minecraft:rain";
    ParticleType["Scrape"] = "minecraft:scrape";
    ParticleType["Smoke"] = "minecraft:smoke";
    ParticleType["Sneeze"] = "minecraft:sneeze";
    ParticleType["SnowFlake"] = "minecraft:snowflake";
    ParticleType["Soul"] = "minecraft:soul";
    ParticleType["SoulFireFlame"] = "minecraft:soul_fire_flame";
    ParticleType["Spit"] = "minecraft:spit";
    ParticleType["Splash"] = "minecraft:splash";
    ParticleType["SporeBlossomAir"] = "minecraft:spore_blossom_air";
    ParticleType["SquidInk"] = "minecraft:squid_ink";
    ParticleType["SweepAttack"] = "minecraft:sweep_attack";
    ParticleType["TotemOfUndying"] = "minecraft:totem_of_undying";
    ParticleType["Underwater"] = "minecraft:underwater";
    ParticleType["Vibration"] = "minecraft:vibration";
    ParticleType["WarpedSpore"] = "minecraft:warped_spore";
    ParticleType["WaxOff"] = "minecraft:wax_off";
    ParticleType["WaxOn"] = "minecraft:wax_on";
    ParticleType["WhiteAsh"] = "minecraft:white_ash";
    ParticleType["Witch"] = "minecraft:witch";
})(ParticleType = exports.ParticleType || (exports.ParticleType = {}));
