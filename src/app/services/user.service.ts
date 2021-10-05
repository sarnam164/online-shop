import { Observable } from 'rxjs';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="https://online-shop-164.herokuapp.com/user";

  //For Local Testing
  //private url = "http://localhost:8080/user"

  constructor(private http:HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`);
  }

  getUserByEmail(email:string):Observable<User>{
    return this.http.get<User>(`${this.url}/${email}`);
  }

  addUser(user:User):Observable<Object>{
    return this.http.post(`${this.url}`, user);
  }

  updateUser(id:number, user:User):Observable<Object>{
    return this.http.put(`${this.url}/${id}`, user);
  }

  deleteUser(id:number):Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
