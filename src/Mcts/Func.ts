import Package from "./Package";

export default class Func
{
    private static totalFuncs : number = 0;

    public static Run(commands : string[], name : string = null)
    {
        if(name == null)
        {
            name = `customfunc_${Func.totalFuncs}`;
        }

        Package.NewFile(name, ...commands);

        Func.totalFuncs++;

        return `function ${Package.Id}:${name}`;
    }

    public static Of(name : string)
    {
        return `function ${Package.Id}:${name}`;
    }

}