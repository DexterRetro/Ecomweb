import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MusikaItem } from 'src/app/models/musika-item';
import { MusikaItemService } from 'src/app/services/musika-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ItemsOnDiscount:MusikaItem[]=[];
  constructor(private route:Router,private ItemService:MusikaItemService) {

  }

  ngOnInit(): void {
    this.ItemService.getItems().then(e=>{
      e.subscribe(res=>{
        this.ItemsOnDiscount = res;
        console.log(this.ItemsOnDiscount[0].itemImages);
      })
    })
  }

  ViewItem(id:any){
    this.route.navigateByUrl(`/item/${id}`);
  }

  AddToCart(id:any){

  }

}
