import { MusikaItem } from "./musika-item";
import { MusikaUser } from "./musika-user";

export interface OderHistory {
    id?:number;
    user:MusikaUser;
    item:MusikaItem;
    quantity:number;
    position:number;
    amountPaid:string;
    date:Date;
}
