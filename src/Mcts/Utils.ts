import { randomUUID } from "crypto";

export interface Vector
{
    x? : number;
    y? : number;
    z? : number;
}

export function GenerateUUID() : string
{
    const uuid = randomUUID().replace(/-/g, ",").toUpperCase();

    return `[I;${uuid}]`;
}