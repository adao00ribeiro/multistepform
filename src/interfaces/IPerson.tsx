import { IAddons } from "./IAddons";
import { IPlan } from "./IPlan";

export interface IPerson {
    name: string;
    email: string;
    phoneNumber: string;
    plan: IPlan;
    addons: IAddons[];
}