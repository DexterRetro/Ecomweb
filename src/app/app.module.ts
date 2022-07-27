import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ItemviewComponent } from './pages/itemview/itemview.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileComponent } from './pages/accountPages/profile/profile.component';
import { FeaturedComponent } from './pages/homepages/featured/featured.component';
import { ItemListComponent } from './pages/homepages/item-list/item-list.component';
import { LoginComponent } from './pages/accountPages/login/login.component';
import { SignupComponent } from './pages/accountPages/signup/signup.component';
import { AcountPageComponent } from './pages/acount-page/acount-page.component';
import { LoaderComponent } from './templates/loader/loader.component';
import { HttpErrorInterceptorInterceptor } from './interceptors/http-error-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemviewComponent,
    CheckoutComponent,
    ProfileComponent,
    FeaturedComponent,
    ItemListComponent,
    LoginComponent,
    SignupComponent,
    AcountPageComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptorInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
