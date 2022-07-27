import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { MusikaItemService } from 'src/app/services/musika-item.service';
import { MusikaUserService } from 'src/app/services/musika-user.service';
import { ItemQue } from 'src/app/models/item-que';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutList:ItemQue[]=[];
  stepperOrientation: Observable<StepperOrientation>;
  constructor(
      private breakpointObserver: BreakpointObserver,
      private userService:MusikaUserService
      ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      if(userService.CurrentUser){
        this.checkoutList=userService.CurrentUser.itemQue;
      }

   }

  ngOnInit(): void {
  }

}
