import { MusikaItem } from "./musika-item";

export interface ItemQue {
  id?:number;
  item:MusikaItem;
  addedDate:Date;
  state:string;
}
