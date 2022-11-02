
import Package from "./Package";
import { Selectors } from "./Selector";

export default class Scores
{

    public static Define(name : string, criteria? : string)
    {
        if(criteria)
        {
            Package.AppendLoad(`scoreboard objectives add ${name} ${criteria}`)
        }
        else
        {
            Package.AppendLoad(`scoreboard objectives add ${name} dummy`)
        }
    }

    public static Set(selector : Selectors | string, name : string, value : number)
    {
        return `scoreboard players set ${selector} ${name} ${value}`;
    }

    public static Add(selector : Selectors | string, name : string, value : number)
    {
        return `scoreboard players add ${selector} ${name} ${value}`;
    }

    public static Remove(selector : Selectors | string, name : string, value : number)
    {
        return `scoreboard players remove ${selector} ${name} ${value}`;
    }

    public static Reset(selector : Selectors | string, name : string)
    {
        return `scoreboard players reset ${selector} ${name}`;
    }

}