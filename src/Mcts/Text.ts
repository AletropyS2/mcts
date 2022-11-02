export default interface Text
{
    text: string;
    color?: string;
    bold?: boolean;
    italic?: boolean;
    underlined?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
    insertion?: string;
    clickEvent?: ClickEvent;
    hoverEvent?: HoverEvent;
}

export interface ClickEvent
{
    action: ClickAction;
    value: string;
}

export enum ClickAction
{
    OpenUrl = "open_url",
    RunCommand = "run_command",
    SuggestCommand = "suggest_command",
    ChangePage = "change_page",
    CopyToClipboard = "copy_to_clipboard"
}

export interface HoverEvent
{
    action: HoverAction;
    value: string;
}

export enum HoverAction
{
    ShowText = "show_text",
    ShowItem = "show_item",
    ShowEntity = "show_entity"
}