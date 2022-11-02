import { Selectors } from "./Selector";
export default class Scores {
    static Define(name: string, criteria?: string): void;
    static Set(selector: Selectors | string, name: string, value: number): string;
    static Add(selector: Selectors | string, name: string, value: number): string;
    static Remove(selector: Selectors | string, name: string, value: number): string;
    static Reset(selector: Selectors | string, name: string): string;
}
//# sourceMappingURL=Scores.d.ts.map