import { ItemQue } from "./item-que";
import { OderHistory } from "./oder-history";

export interface MusikaUser {
  id?:number;
  username:string;
  firstNames:string;
  surname:string;
  password?:any;
  passwordSalt?:any;
  telephone:number;
  email:string;
  address:string;
  city:string;
  country:string;
  orderHistories:OderHistory[];
  itemQue:ItemQue[];
}

