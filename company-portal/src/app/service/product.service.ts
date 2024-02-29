import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
   baseURL = [`http://localhost:8080/products`];
  constructor(private http:HttpClient) { }

  addProduct(product:Product): Observable<any> {
    return  this.http.post(`${this.baseURL}/addProduct`, product);
  
    }

    deleteProduct(modelNumber:any):Observable<any>{
      return this.http.delete(`${this.baseURL}/remove/Product/${modelNumber}`,{responseType:"text"});
    }

    getProduct(modelNumber:any): Observable<any> {
      return this.http.get(`${this.baseURL}/get/Product/${modelNumber}`);
  
    }
    getAllProducts(): Observable<any> {
      return this.http.get(`${this.baseURL}/get/All/Products`);
  
    }
    updateProductWarranty(modelNumber:any,years:any):Observable<any>{
      return this.http.put(`${this.baseURL}/updateProductWarranty/${modelNumber}/${years}`,Response);

    }

  
}
