export default class Package {
    static Id: string;
    static DataPath: string;
    static McPath: string;
    static Generate(name: string, description: string, version: number): void;
    static NewFile(name: string, ...commands: string[]): void;
    static Main(...commands: string[]): void;
    static Load(...commands: string[]): void;
    static ClickEvent(identifier: string, command: string): void;
    static AppendMain(...commands: string[]): void;
    static AppendLoad(...commands: string[]): void;
}
//# sourceMappingURL=Package.d.ts.map