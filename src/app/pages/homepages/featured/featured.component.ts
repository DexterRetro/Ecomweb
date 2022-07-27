import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusikaItem } from 'src/app/models/musika-item';
import { MusikaItemService } from 'src/app/services/musika-item.service';
import { MusikaUserService } from 'src/app/services/musika-user.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featureItems:MusikaItem[]=[]
  constructor(private router:Router,private Itemservice:MusikaItemService,private UserServe:MusikaUserService) { }

  ngOnInit(): void {
    this.Itemservice.getItems().then(e=>{
      e.subscribe(res=>{
        this.featureItems=res;
      })
    })
  }

  GetIntegerRating(id:any):number{
    let rating:number = 0;
    const item = this.featureItems.find(f=>{
      return f.id===id;
    });
    if(item){

      for (let index = 0; index < item.reviews.length; index++) {
        rating+= item.reviews[index].rating;
      }
      if(rating%1!==0 && rating>0){
        rating = Math.round(rating) -1;
      }
    }
    return rating;
  }

  GetFloatRating(id:any):number{
    let rating:number = 0;
    const item = this.featureItems.find(f=>{
      return f.id===id;
    });
    if(item){

      for (let index = 0; index < item.reviews.length; index++) {
        rating+= item.reviews[index].rating;
      }
      if(rating===0){
        rating=1;
      }
      else if(rating%1!==0){
        rating=1;
      }
    }
    return rating;
  }

  ViewItem(id:any){
    this.router.navigateByUrl(`/item/${id}`);
  }

  AddToCart(id:any){
    this.UserServe.AddToCart(id);
  }

  AddToWishList(id:any){
    this.UserServe.AddToWishlist(id);
  }

}
