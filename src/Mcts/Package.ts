import { appendFileSync, mkdirSync, rmdirSync, rmSync, writeFileSync } from "fs";
import Execute from "./Execute";
import Func from "./Func";
import { Selectors } from "./Selector";

export default class Package
{

    public static Id : string = "Mcts";
    public static DataPath : string = "";
    public static McPath : string = "";

    static Generate(name : string, description : string, version : number)
    {
        Package.Id = name.toLowerCase();

        const data = {
            pack: {
                description,
                pack_format: version
            }
        }

        GenerateManifest(JSON.stringify(data, null, 4));
        GenerateFolders();
        GeneratePackageTags();
    }

    static NewFile(name : string, ...commands : string[])
    {
        const content = commands.join("\r\n");

        writeFileSync(`${Package.DataPath}/functions/${name}.mcfunction`, content);
    }

    static Main(...commands : string[])
    {
        const content = commands.join("\r\n");

        writeFileSync(`${Package.DataPath}/functions/main.mcfunction`, content);
    }

    static Load(...commands : string[])
    {
        const content = commands.join("\r\n");

        writeFileSync(`${Package.DataPath}/functions/load.mcfunction`, content);
    }

    static ClickEvent(identifier : string, command : string)
    {
        Package.AppendLoad(
            `scoreboard objectives add ${identifier} minecraft.used:minecraft.carrot_on_a_stick`
        )

        Package.AppendMain(
        Execute.AsAt(Selectors.AllPlayers, Func.Run([
            command,
            `scoreboard players set @s ${identifier} 0`
        ], `clickevent_${identifier}`)).If(`score @s ${identifier} matches 1..`).Build());
    }

    static AppendMain(...commands : string[])
    {
        const content = commands.join("\r\n");

        appendFileSync(`${Package.DataPath}functions/main.mcfunction`, "\n" + content);
    }

    static AppendLoad(...commands : string[])
    {
        const content = commands.join("\r\n");

        appendFileSync(`${Package.DataPath}functions/load.mcfunction`, "\n" + content);
    }

}

function GenerateManifest(data : string)
{
    writeFileSync("./pack.mcmeta", data);
}

function GenerateFolders()
{
    const packPath = `./data/${Package.Id}/`
    const minecraftPath = `./data/minecraft/`;

    Package.DataPath = packPath;
    Package.McPath = minecraftPath;

    try { 
        rmSync(`./data/${Package.Id}/functions/`, { recursive: true, force: true })
    } catch (e) {
        console.log("Data folder not found, creating new one.");
    }

    mkdirSync(packPath, { recursive: true});
    mkdirSync(minecraftPath, { recursive: true });

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

function GeneratePackageTags()
{
    const main = {
        values: [
            `${Package.Id}:main`
        ]
    }

    const load = {
        values: [
            `${Package.Id}:load`
        ]
    }

    GenerateFolder(Package.McPath, "tags/functions");

    writeFileSync(`${Package.McPath}tags/functions/load.json`, JSON.stringify(load, null, 4));
    writeFileSync(`${Package.McPath}tags/functions/tick.json`, JSON.stringify(main, null, 4));
}

function GenerateFolder(path : string, folder : string)
{
    try { 
        mkdirSync(`${path}/${folder}`, { recursive: true });
    } catch (e) {
    }
}