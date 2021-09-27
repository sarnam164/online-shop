import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://online-shop-164.herokuapp.com/api/products";
  private url2 = "https://online-shop-164.herokuapp.com/api/category";

  //For Local Testing
  //private url = "http://localhost:8080/api/products"
  //private url2 = "http://localhost:8080/api/category"

  constructor(private http:HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}`);
  }

  getProductByCategory(categoryname:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url2}/${categoryname}`);
  }

  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${productId}`);
  }

  addProduct(product:Product):Observable<Object>{
    return this.http.post(`${this.url}`, product);
  }

  updateProduct(productId:string, product:Product):Observable<Object>{
    return this.http.put(`${this.url}/${productId}`, product);
  }

  deleteProduct(productId:string):Observable<Object>{
    return this.http.delete(`${this.url}/${productId}`);
  }

}
