import { EntityNBT } from "./Entity";

export enum Selectors {
    "AllPlayers" = "@a",
    "All" = "@e",
    "NearestPlayer" = "@p",
    "RandomPlayer" = "@r",
    "Self" = "@s"
}

export default class Selector
{

    private selector : Selectors;
    private nbt : string;

    constructor(selector : Selectors, nbt? : string)
    {
        this.selector = selector;
        this.nbt = nbt;
    }

    public ToString()
    {
        if(this.nbt)
        {
            return `${this.selector}[${this.nbt}]`;
        }

        return `${this.selector}`;
    }

}