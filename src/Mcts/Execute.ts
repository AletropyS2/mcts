import { Selectors } from "./Selector";

export default class Execute
{
    private command : string = "";
    private baseExecute : string = ""

    private constructor(baseExecute : string, command : string)
    {
        this.baseExecute = baseExecute;
        this.command = command;
    }

    public As(selector :string)
    {
        this.baseExecute += ` as ${selector}`;

        return this;
    }

    public At(selector : string)
    {
        this.baseExecute += ` at ${selector}`;

        return this;    
    }

    public AsAt(selector : string)
    {
        this.baseExecute += ` as ${selector} at @s`;

        return this;
    }

    public If(condition : string)
    {
        if(condition.startsWith("!"))
        {
            this.baseExecute += ` unless ${condition.substring(1)}`;
        }
        else
        {
            this.baseExecute += ` if ${condition}`;
        }

        return this;
    }

    public Positioned(x : number, y : number, z : number, relative : boolean = false)
    {
        this.baseExecute += ` positioned ${relative ? "~" : ""}${x} ${relative ? "~" : ""}${y} ${relative ? "~" : ""}${z}`;

        return this;
    }
    public PositionedView(x : number, y : number, z : number)
    {
        this.baseExecute += ` positioned ^${x} ^${y} ^${z}`;

        return this;
    }

    public Anchored(eyes : boolean = false)
    {
        this.baseExecute += ` anchored ${eyes ? "eyes" : "feet"}`;

        return this;
    }

    public Build()
    {
        return `${this.baseExecute} run ${this.command}`;
    }

    // Static methods

    public static As(selector : string, command : string)
    {
        return new Execute(`execute as ${selector}`, command);
    }

    public static At(selector : string, command : string)
    {
        return new Execute(`execute at ${selector}`, command);
    }

    public static AsAt(selector : string, command : string)
    {
        return new Execute(`execute as ${selector} at @s`, command);
    }

    public static If(condition : string, command : string)
    {
        if(condition.startsWith("!"))
        {
            return new Execute(`execute unless ${condition.substring(1)}`, command);
        }

        return new Execute(`execute if ${condition}`, command);
    }

    public static Anchored(eyes : boolean, command : string)
    {
        return new Execute(`execute anchored ${eyes ? "eyes" : "feet"}`, command);
    }

}