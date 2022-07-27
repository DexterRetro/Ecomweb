import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { MusikaUser } from '../models/musika-user';
import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class MusikaUserService {
  CurrentUser:MusikaUser;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'accept':'text/plain',
      'Content-Type':'application/json'
    })
  };
  constructor(private http:HttpClient,private router:Router) { }

  async LogIn(userDto:any):Promise<Observable<MusikaUser>>{
    return await  this.http.post<MusikaUser>('https://localhost:7037/auth/MusikaAuth/login', userDto, this.httpOptions)
      .pipe(
        catchError((err) => {
          this.router.navigateByUrl(this.router.url);
          return throwError(err); //Rethrow it back to component
        })
      )
  }

  async SignUp(user:MusikaUser):Promise<Observable<MusikaUser>>{
    return await this.http.post<MusikaUser>('https://localhost:7037/auth/MusikaAuth/register',user,this.httpOptions);

  }

  async TokenLogIn(token:string):Promise<Observable<MusikaUser>>{
    return await this.http.get<MusikaUser>(`https://localhost:7037/auth/MusikaAuth/login/${token}`);
  }


  async AddToCart(itemId:any):Promise<Observable<MusikaUser>>{
    if(!this.CurrentUser){
      this.router.navigateByUrl('/account');
      return new Observable<MusikaUser>();
    }
    const res = await this.http.post<MusikaUser>('https://localhost:7037/auth/MusikaAuth/cart',{ItemId:itemId,UserId:this.CurrentUser.id},this.httpOptions);
    res.subscribe(r=>{
      this.CurrentUser=r;
    });
    return res;
  }
  async AddToWishlist(itemId:any):Promise<Observable<MusikaUser>>{
    if(!this.CurrentUser){
      this.router.navigateByUrl('/account')
      return new Observable<MusikaUser>();
    }
    const res = await this.http.post<MusikaUser>('https://localhost:7037/auth/MusikaAuth/wishlist',{ItemId:itemId,UserId:this.CurrentUser.id},this.httpOptions);
    res.subscribe(r=>{
      this.CurrentUser=r;
    });
    return res;
  }
}
