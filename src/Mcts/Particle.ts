import { Vector } from "./Utils";

export default class Particle
{
    public static From(options : ParticleOptions, relativePos : boolean = false) : string
    {
        let { type, position, delta, speed, force, count } = options;
        
        if(!position)
        {
            position = {
                x: 0,
                y: 0,
                z: 0
            };
        }
        else
        {
            position.x = position.x || 0;
            position.y = position.y || 0;
            position.z = position.z || 0;
        }

        if(!delta)
        {
            delta = {
                x: 0,
                y: 0,
                z: 0
            };
        }
        else
        {
            delta.x = delta.x || 0;
            delta.y = delta.y || delta.x;
            delta.z = delta.z || delta.x;
        }

        if(!speed)
            speed = 0;
        if(!count)
            count = 1;

        return `particle ${type} ${relativePos ? "~" : ""}${position.x} ${relativePos ? "~" : ""}${position.y} ${relativePos ? "~" : ""}${position.z} ${delta.x} ${delta.y} ${delta.z} ${speed} ${count} ${force ? "force" : "normal"}`;
    }
}

export interface ParticleOptions
{
    type : ParticleType;
    count?: number;
    position? : Vector;
    delta? : Vector;
    speed? : number;
    force? : boolean;
}

export enum ParticleType
{
    AmbientEntityEffect = "minecraft:ambient_entity_effect",
    AngryVillager = "minecraft:angry_villager",
    Ash = "minecraft:ash",
    Barrier = "minecraft:barrier",
    Block = "minecraft:block",
    Bubble = "minecraft:bubble",
    BubblePop = "minecraft:bubble_pop",
    BubbleColumnUp = "minecraft:bubble_column_up",
    CampfireCosySmoke = "minecraft:campfire_cosy_smoke",
    CampfireSignalSmoke = "minecraft:campfire_signal_smoke",
    Cloud = "minecraft:cloud",
    Composter = "minecraft:composter",
    CrimsonSpore = "minecraft:crimson_spore",
    Crit = "minecraft:crit",
    CurrentDown = "minecraft:current_down",
    DamageIndicator = "minecraft:damage_indicator",
    Dolphin = "minecraft:dolphin",
    DragonBreath = "minecraft:dragon_breath",
    DrippinDripstoneLava = "minecraft:dripping_dripstone_lava",
    DrippingDripstoneWater = "minecraft:dripping_dripstone_water",
    DrippingLava = "minecraft:dripping_lava",
    DrippingObsidianTear = "minecraft:dripping_obsidian_tear",
    DrippingWater = "minecraft:dripping_water",
    Effect = "minecraft:effect",
    ElderGuardian = "minecraft:elder_guardian",
    EletricSpark = "minecraft:electric_spark",
    Enchant = "minecraft:enchant",
    EnchantedHit = "minecraft:enchanted_hit",
    EndRod = "minecraft:end_rod",
    EntityEffect = "minecraft:entity_effect",
    ExplosionEmitter = "minecraft:explosion_emitter",
    Explosion = "minecraft:explosion",
    FallingDripstoneLava = "minecraft:falling_dripstone_lava",
    FallingDripstoneWater = "minecraft:falling_dripstone_water",
    FallingDust = "minecraft:falling_dust",
    FallingLava = "minecraft:falling_lava",
    FallingObsidianTear = "minecraft:falling_obsidian_tear",
    FallingSporeBlossom = "minecraft:falling_spore_blossom",
    FallingWater = "minecraft:falling_water",
    Firework = "minecraft:firework",
    Fishing = "minecraft:fishing",
    Flame = "minecraft:flame",
    Flash = "minecraft:flash",
    Glow = "minecraft:glow",
    GlowSquidInk = "minecraft:glow_squid_ink",
    HappyVillager = "minecraft:happy_villager",
    Heart = "minecraft:heart",
    InstantEffect = "minecraft:instant_effect",
    Item = "minecraft:item",
    ItemSlime = "minecraft:item_slime",
    ItemSnowball = "minecraft:item_snowball",
    LandingLava = "minecraft:landing_lava",
    LandingObsidianTear = "minecraft:landing_obsidian_tear",
    LargeSmoke = "minecraft:large_smoke",
    Lava = "minecraft:lava",
    Light = "minecraft:light",
    Mycelium = "minecraft:mycelium",
    Nautilus = "minecraft:nautilus",
    Note = "minecraft:note",
    Poof = "minecraft:poof",
    Portal = "minecraft:portal",
    Rain = "minecraft:rain",
    Scrape = "minecraft:scrape",
    Smoke = "minecraft:smoke",
    Sneeze = "minecraft:sneeze",
    SnowFlake = "minecraft:snowflake",
    Soul = "minecraft:soul",
    SoulFireFlame = "minecraft:soul_fire_flame",
    Spit = "minecraft:spit",
    Splash = "minecraft:splash",
    SporeBlossomAir = "minecraft:spore_blossom_air",
    SquidInk = "minecraft:squid_ink",
    SweepAttack = "minecraft:sweep_attack",
    TotemOfUndying = "minecraft:totem_of_undying",
    Underwater = "minecraft:underwater",
    Vibration = "minecraft:vibration",
    WarpedSpore = "minecraft:warped_spore",
    WaxOff = "minecraft:wax_off",
    WaxOn = "minecraft:wax_on",
    WhiteAsh = "minecraft:white_ash",
    Witch = "minecraft:witch"
}