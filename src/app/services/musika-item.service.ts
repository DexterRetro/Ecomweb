import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MusikaItem } from '../models/musika-item';

@Injectable({
  providedIn: 'root'
})
export class MusikaItemService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'accept':'text/plain',
      'Content-Type':'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  async getItems():Promise<Observable<MusikaItem[]>>{
   return await this.http.get<MusikaItem[]>(`https://localhost:7037/api/MusikaApi`);
  }
  async getItem(id:any):Promise<Observable<MusikaItem>>{
    return await this.http.get<MusikaItem>(`https://localhost:7037/api/MusikaApi/${id}`);
  }

}
