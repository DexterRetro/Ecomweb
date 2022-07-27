import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemQue } from './models/item-que';
import { MusikaUserService } from './services/musika-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecomweb';

  constructor(private router:Router,private userServe:MusikaUserService){

  }

  Navigate(route:string){
    this.router.navigateByUrl(route);
  }

  getQueNumber(findState:string){
    let cart =[];
    if(this.userServe.CurrentUser){
      if(this.userServe.CurrentUser.itemQue){
        cart = this.userServe.CurrentUser.itemQue.filter(a=>{
          return a.state===findState;
        });

      }
    }
    return cart.length;
  }
}
