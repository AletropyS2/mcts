import { EntityNBT } from "./Entity";
import Selector, { Selectors } from "./Selector";
import Text from "./Text";
import { Vector } from "./Utils";

export default class Item
{

    public static GiveItem(item : string, count: number, nbt? : ItemNBT)
    {
        return Item.GiveItemTo(Selectors.Self, item, count, nbt);
    }

    public static GiveItemTo(selector : string, item : string, count: number, nbt? : ItemNBT)
    {
        if(nbt)
        {
            return `give ${selector} ${item}${JSON.stringify(nbt)} ${count}`;
        }

        return `give ${selector} ${item} ${count}`;
    }

    public static SpawnItem(item : string, count: number, position : Vector, relativePos : boolean = false, nbt? : ItemNBT)
    {
        if(nbt)
        {
            return `summon item ${relativePos ? "~" : ""}${position.x} ${relativePos ? "~" : ""}${position.y} ${relativePos ? "~" : ""}${position.z} {Item:{id:"${item}",Count:${count}b,tag:${JSON.stringify(nbt)}}}`;
        }
        else
        {
            return `summon item ${relativePos ? "~" : ""}${position.x} ${relativePos ? "~" : ""}${position.y} ${relativePos ? "~" : ""}${position.z} {Item:{id:"${item}",Count:${count}b}}`;
        }
    }

}

export interface ItemNBT
{
    Enchantments: Array<Enchantment>;
    EntityTag : EntityNBT;
    display : Display;
    AttributeModifiers : Array<AttributeModifier>;
}

interface Enchantment
{
    id: string;
    lvl: number;
}

interface Display
{
    Name: Text;
    Lore: Array<Text>;
}

interface AttributeModifier
{
    AttributeName: string;
    Name: string;
    Amount: number;
    Operation: number;
    UUID : string;
    Unbreakable : boolean;
    HideFlags : number;
    PickupDelay : number;
    Age : number;
    generation : string;
    Fireworks: Fireworks;
}

interface Fireworks
{
    Flight: number;
    Explosions: Array<Explosion>;
}

interface Explosion
{
    Type: number;
    Colors: Array<number>;
    FadeColors: Array<number>;
    Flicker: boolean;
    Trail: boolean;
}

export enum HideFlagsId
{
    HideEnchantments = 1,
    HideAttributes = 2,
    HideUnbreakable = 4,
    HideCanDestroy = 8,
    HideCanPlace = 16,
    HideMiscellaneous = 32
}