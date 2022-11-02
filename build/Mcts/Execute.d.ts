export default class Execute {
    private command;
    private baseExecute;
    private constructor();
    As(selector: string): this;
    At(selector: string): this;
    AsAt(selector: string): this;
    If(condition: string): this;
    Positioned(x: number, y: number, z: number, relative?: boolean): this;
    PositionedView(x: number, y: number, z: number): this;
    Anchored(eyes?: boolean): this;
    Build(): string;
    static As(selector: string, command: string): Execute;
    static At(selector: string, command: string): Execute;
    static AsAt(selector: string, command: string): Execute;
    static If(condition: string, command: string): Execute;
    static Anchored(eyes: boolean, command: string): Execute;
}
//# sourceMappingURL=Execute.d.ts.map