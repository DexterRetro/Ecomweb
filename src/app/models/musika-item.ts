export interface MusikaItem {
  id?:number;
  itemName:string;
  supplierName:string;
  itemPrice:number;
  itemQuantity:number;
  itemDescription:string;
  reviews:{
    id?:number;
    commentor:string;
    comment:string;
    rating:number;
    commentDate:Date;
  }[];
  itemImages:{
    id?:number;
    imageName:string;
    imageURL:string;
  }[];

}
