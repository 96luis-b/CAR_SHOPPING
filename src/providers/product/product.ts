import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../service/service.service';
/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

	url;

  constructor(public http: HttpClient,
			  public service: Service) {
    console.log('Hello ProductProvider Provider');
	console.log(this.service.url);
		this.url = this.service.url;

  }
  
  myProductList(product):Observable<any>{
    return this.http.post(`${this.url}ProductList`, {product}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  detailMyProduct(product):Observable<any>{
	return this.http.post(`${this.url}GetProduct`,{product}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }
  
  createProduct(product):Observable<any>{
	  return this.http.post(`${this.url}CreateProduct`, {product}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
  updateProduct(product):Observable<any>{
	  return this.http.post(`${this.url}UpdateProduct`, {product}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
	}

  deleteProduct(product):Observable<any>{
	  return this.http.post(`${this.url}DeleteProduct`, {product}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  

  listProductAll():Observable<any>{
	  return this.http.post(`${this.url}ListProductAll`, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }

  detailProduct(product):Observable<any>{
    return this.http.post(`${this.url}DetailProduct`, {product}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
 algo(nose):Observable<any>{
    return this.http.post(`${this.url}Car`, {nose}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

}
