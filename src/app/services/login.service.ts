import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url="https://online-shop-164.herokuapp.com";

  //For Local Testing
  //private url = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  //Calling server to generate token
  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`, credentials);
  }


  //For logging in User
  loginUser(token){
    localStorage.setItem("token", token);
    return true;
  }

  //For checking if user is logged in
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token=='' || token==null)
      return false;
    else
      return true;
  }

  //For logging out user
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //For getting the token
  getToken(){
    return localStorage.getItem("token");
  }
}
