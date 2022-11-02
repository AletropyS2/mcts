import { EntityNBT } from "./Entity";
import Text from "./Text";
import { Vector } from "./Utils";
export default class Item {
    static GiveItem(item: string, count: number, nbt?: ItemNBT): string;
    static GiveItemTo(selector: string, item: string, count: number, nbt?: ItemNBT): string;
    static SpawnItem(item: string, count: number, position: Vector, relativePos?: boolean, nbt?: ItemNBT): string;
}
export interface ItemNBT {
    Enchantments: Array<Enchantment>;
    EntityTag: EntityNBT;
    display: Display;
    AttributeModifiers: Array<AttributeModifier>;
}
interface Enchantment {
    id: string;
    lvl: number;
}
interface Display {
    Name: Text;
    Lore: Array<Text>;
}
interface AttributeModifier {
    AttributeName: string;
    Name: string;
    Amount: number;
    Operation: number;
    UUID: string;
    Unbreakable: boolean;
    HideFlags: number;
    PickupDelay: number;
    Age: number;
    generation: string;
    Fireworks: Fireworks;
}
interface Fireworks {
    Flight: number;
    Explosions: Array<Explosion>;
}
interface Explosion {
    Type: number;
    Colors: Array<number>;
    FadeColors: Array<number>;
    Flicker: boolean;
    Trail: boolean;
}
export declare enum HideFlagsId {
    HideEnchantments = 1,
    HideAttributes = 2,
    HideUnbreakable = 4,
    HideCanDestroy = 8,
    HideCanPlace = 16,
    HideMiscellaneous = 32
}
export {};
//# sourceMappingURL=Item.d.ts.map