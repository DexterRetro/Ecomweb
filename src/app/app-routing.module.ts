import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedComponent } from './pages/homepages/featured/featured.component';
import { ItemListComponent } from './pages/homepages/item-list/item-list.component';
import { ItemviewComponent } from './pages/itemview/itemview.component';
import { ProfileComponent } from './pages/accountPages/profile/profile.component';
import { AcountPageComponent } from './pages/acount-page/acount-page.component';
import { LoginComponent } from './pages/accountPages/login/login.component';
import { SignupComponent } from './pages/accountPages/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        redirectTo:'featured',
        pathMatch:'full'
      },
      {
        path:'featured',
        component:FeaturedComponent
      },
      {
        path:'itemList',
        component:ItemListComponent
      }
    ]
  },
  {
    path:'item/:id',
    component:ItemviewComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'account',
    component:AcountPageComponent,
    children:[
      {
        path:'',
        redirectTo:'logIn',
        pathMatch:'full'
      },
      {
        path:'logIn',
        component:LoginComponent
      },
      {
        path:'signUp',
        component:SignupComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
