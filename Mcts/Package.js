"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Execute_1 = __importDefault(require("./Execute"));
const Func_1 = __importDefault(require("./Func"));
const Selector_1 = require("./Selector");
class Package {
    static Generate(name, description, version) {
        Package.Id = name.toLowerCase();
        const data = {
            pack: {
                description,
                pack_format: version
            }
        };
        GenerateManifest(JSON.stringify(data, null, 4));
        GenerateFolders();
        GeneratePackageTags();
    }
    static NewFile(name, ...commands) {
        const content = commands.join("\r\n");
        (0, fs_1.writeFileSync)(`${Package.DataPath}/functions/${name}.mcfunction`, content);
    }
    static Main(...commands) {
        const content = commands.join("\r\n");
        (0, fs_1.writeFileSync)(`${Package.DataPath}/functions/main.mcfunction`, content);
    }
    static Load(...commands) {
        const content = commands.join("\r\n");
        (0, fs_1.writeFileSync)(`${Package.DataPath}/functions/load.mcfunction`, content);
    }
    static ClickEvent(identifier, command) {
        Package.AppendLoad(`scoreboard objectives add ${identifier} minecraft.used:minecraft.carrot_on_a_stick`);
        Package.AppendMain(Execute_1.default.AsAt(Selector_1.Selectors.AllPlayers, Func_1.default.Run([
            command,
            `scoreboard players set @s ${identifier} 0`
        ], `clickevent_${identifier}`)).If(`score @s ${identifier} matches 1..`).Build());
    }
    static AppendMain(...commands) {
        const content = commands.join("\r\n");
        (0, fs_1.appendFileSync)(`${Package.DataPath}functions/main.mcfunction`, "\n" + content);
    }
    static AppendLoad(...commands) {
        const content = commands.join("\r\n");
        (0, fs_1.appendFileSync)(`${Package.DataPath}functions/load.mcfunction`, "\n" + content);
    }
}
exports.default = Package;
Package.Id = "Mcts";
Package.DataPath = "";
Package.McPath = "";
function GenerateManifest(data) {
    (0, fs_1.writeFileSync)("./pack.mcmeta", data);
}
function GenerateFolders() {
    const packPath = `./data/${Package.Id}/`;
    const minecraftPath = `./data/minecraft/`;
    Package.DataPath = packPath;
    Package.McPath = minecraftPath;
    try {
        (0, fs_1.rmSync)(`./data/${Package.Id}/functions/`, { recursive: true, force: true });
    }
    catch (e) {
        console.log("Data folder not found, creating new one.");
    }
    (0, fs_1.mkdirSync)(packPath, { recursive: true });
    (0, fs_1.mkdirSync)(minecraftPath, { recursive: true });
    GenerateFolder(minecraftPath, "advancements");
    GenerateFolder(minecraftPath, "functions");
    GenerateFolder(minecraftPath, "loot_tables");
    GenerateFolder(minecraftPath, "recipes");
    GenerateFolder(minecraftPath, "structures");
    GenerateFolder(minecraftPath, "tags");
    GenerateFolder(packPath, "advancements");
    GenerateFolder(packPath, "functions");
    GenerateFolder(packPath, "loot_tables");
    GenerateFolder(packPath, "recipes");
    GenerateFolder(packPath, "structures");
    GenerateFolder(packPath, "tags");
}
function GeneratePackageTags() {
    const main = {
        values: [
            `${Package.Id}:main`
        ]
    };
    const load = {
        values: [
            `${Package.Id}:load`
        ]
    };
    GenerateFolder(Package.McPath, "tags/functions");
    (0, fs_1.writeFileSync)(`${Package.McPath}tags/functions/load.json`, JSON.stringify(load, null, 4));
    (0, fs_1.writeFileSync)(`${Package.McPath}tags/functions/tick.json`, JSON.stringify(main, null, 4));
}
function GenerateFolder(path, folder) {
    try {
        (0, fs_1.mkdirSync)(`${path}/${folder}`, { recursive: true });
    }
    catch (e) {
    }
}
