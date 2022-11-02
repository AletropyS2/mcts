export default class Loop
{

    public static For(min : number, max : number, ...commands : string[])
    {
        let content = "";

        for(let i = min; i < max; i++)
        {
            content += commands.join("\r\n").replace(/\$i/g, i.toString());
            content += "\r\n";
        }

        return content;
    }

}