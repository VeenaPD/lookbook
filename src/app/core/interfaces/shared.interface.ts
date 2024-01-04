import { Button } from "./button.interface";

export interface Shared {
    title: string,
    buttons: Button[],
    copyrightText?: string
}