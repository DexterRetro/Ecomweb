import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MusikaItem } from 'src/app/models/musika-item';
import { MusikaItemService } from 'src/app/services/musika-item.service';
import { MusikaUserService } from 'src/app/services/musika-user.service';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.component.html',
  styleUrls: ['./itemview.component.scss']
})
export class ItemviewComponent implements OnInit {
  quantity=1;
  musikaItem:MusikaItem;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private ItemService:MusikaItemService,
              private Userserv:MusikaUserService
  ) {
    let id;
    route.paramMap.subscribe(e=>{
     id =e.get('id');
    })
    if(id){
      ItemService.getItem(id).then(e=>{
        e.subscribe(res=>{
          this.musikaItem = res;
        })
      })
    }
  }

  ngOnInit(): void {
  }

  GetIntegerRating(id:any):number{
    let rating:number = 0;
    for (let index = 0; index < this.musikaItem.reviews.length; index++) {
      rating+= this.musikaItem.reviews[index].rating;
    }
    if(rating%1!==0 && rating>0){
      rating = Math.round(rating) -1;
    }
    return rating;
  }

  GetFloatRating(id:any):number{
    let rating:number = 0;
    for (let index = 0; index < this.musikaItem.reviews.length; index++) {
      rating+= this.musikaItem.reviews[index].rating;
    }
    if(rating===0){
      rating=1;
    }
    else if(rating%1!==0){
      rating=1;
    }
    return rating;
  }
  changeQuantity(action:string){
    switch(action){
      case 'add':
        if(this.quantity<this.musikaItem.itemQuantity){
          this.quantity++
        }
        break;
      case 'subtract':
        if(this.quantity>1){
          this.quantity--;
        }

        break;
    }
  }


  AddToCart(id:any){
    this.Userserv.AddToCart(id);
  }
  AddToWishList(id:any){
    this.Userserv.AddToWishlist(id);
  }
  CheckOut(){
    this.router.navigateByUrl('/checkout');

  }

}
