import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="https://online-shop-164.herokuapp.com";

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`${this.url}/getusers`);
  }

}
