import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="https://online-shop-164.herokuapp.com";

  //For Local Testing
  //private url = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`${this.url}/getusers`);
  }

}
