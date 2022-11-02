export declare enum Selectors {
    "AllPlayers" = "@a",
    "All" = "@e",
    "NearestPlayer" = "@p",
    "RandomPlayer" = "@r",
    "Self" = "@s"
}
export default class Selector {
    private selector;
    private nbt;
    constructor(selector: Selectors, nbt?: string);
    ToString(): string;
}
//# sourceMappingURL=Selector.d.ts.map