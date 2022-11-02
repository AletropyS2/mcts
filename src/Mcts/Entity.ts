import { Vector } from "./Utils";

export default class Entity
{

    public static SpawnEntity(entityId : string, position? : Vector, nbt? : EntityNBT)
    {
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

        if(nbt)
        {
            return `summon ${entityId} ~${position.x} ~${position.y} ~${position.z} ${JSON.stringify(nbt)}`;
        }

        return `summon ${entityId} ~${position.x} ~${position.y} ~${position.z}`;
    }

}

export interface EntityNBT
{
    Motion? : Array<number>,
    direction?: Array<number>,
    power?: Array<number>,
    ActiveEffects? : Array<Effect>,
    rewardsExp? : boolean,
    Passengers? : Array<string>,
    ArmorItems? : Array<Item>,
    HandItems? : Array<Item>,
    HandDropChances?: Array<number>,
    ArmorDropChances?: Array<number>,
    NoAI?: boolean,
    Silent?: boolean,
    Invulnerable?: boolean,
    NoGravity?: boolean,
    Fire?: number,
    Attributes?: Array<string>,
    Health?: number,
    Anger?: number,
    CustomName?: string,
    CustomNameVisible?: boolean,
    PersistenceRequired?: boolean,
    Type?: number,
    Saddle?: boolean,
    Tame?: boolean,
    Variant?: number,
    Size?: number,
    BlockState?: BlockState,
    Time?: number,
    DropItem?: boolean,
    id?: string,
    Fuse?: number,
    ExplosionRadius?: number,
    ExplosionPower?: number,
    powered?: boolean,
    AttachFace?: number,
    Peek?: number,
    APX?: number,
    APY?: number,
    APZ?: number,
    Profession?: number,
    Offers?: string,
    Facing?: number,
    ItemRotation?: number,
    Item?: string,
    Invisible?: boolean,
    Fixed?: boolean,
    Potion?: string,
    CustomPotionEffects?: Array<Effect>,
    CustomPotionColor?: number,
    ShowArms?: boolean,
    NoBasePlate?: boolean,
    Small?: boolean,
    Marker?: boolean,
    Rotation?: Array<number>,
    HomePosX?: number,
    HomePosY?: number,
    HomePosZ?: number,
    TravelPosX?: number,
    TravelPosY?: number,
    TravelPosZ?: number,
    HasEgg?: boolean,
    Owner?: string,
}

export enum EffectID
{
    Speed = 1,
    Slowness = 2,
    Haste = 3,
    MiningFatigue = 4,
    Strength = 5,
    InstantHealth = 6,
    InstantDamage = 7,
    JumpBoost = 8,
    Nausea = 9,
    Regeneration = 10,
    Resistance = 11,
    FireResistance = 12,
    WaterBreathing = 13,
    Invisibility = 14,
    Blindness = 15,
    NightVision = 16,
    Hunger = 17,
    Weakness = 18,
    Poison = 19,
    Wither = 20,
    HealthBoost = 21,
    Absorption = 22,
    Saturation = 23,
    Glowing = 24,
    Levitation = 25,
    Luck = 26,
    Unluck = 27,
    SlowFalling = 28,
    ConduitPower = 29,
    DolphinsGrace = 30,
    BadOmen = 31,
    HeroOfTheVillage = 32,
    Darkness = 33,
}

interface Item
{
    id : string,
    Count? : number,
    tag? : string
}

interface BlockState
{
    Name : string
}

interface Effect
{
    Id: number,
    Amplifier: number,
    Duration: number,
    Ambient?: boolean,
    ShowParticles?: boolean
}