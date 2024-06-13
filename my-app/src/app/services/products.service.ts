import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Product, Products } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private apiService: ApiService) { }

getProducts = (url: string, params: PaginationParams): Observable<Products> =>{
  return this.apiService.get(url, {
    params,
    responseType: 'json',
  })
}

//body should be any
addProduct = (url: string, body: Product): Observable<Product> =>{
  return this.apiService.post(url, body, {})
}

editProduct = (url: string, body: Product): Observable<Product> =>{
  return this.apiService.put(url, body, {})
}

deleteProduct = (url: string): Observable<any> =>{
  return this.apiService.delete(url, {})
}

}