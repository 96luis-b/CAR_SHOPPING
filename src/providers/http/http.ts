import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../service/service.service';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  url;
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
	//console.log(this.service.url);
	//this.url = this.service.url;
  }

  login(path, user):Observable<any>{
    return this.http.post(`${this.url}${path.path}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  signUp(user):Observable<any>{
    return this.http.post(`${this.url}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }


  getDataUserProfile(user):Observable<any>{
    return this.http.post(`${this.url}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  updateUserProfile(user):Observable<any>{
	console.log(user)
	  return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
  deleteUserProfile(user):Observable<any>{
	  return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  myProductList(user):Observable<any>{
    return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  detailMyProduct(user):Observable<any>{
	console.log(user)
	return this.http.post(`${this.url}/`,{user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }
  
  addProduct(user):Observable<any>{
	console.log(user);
	  return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
  updateProduct(user):Observable<any>{
	  return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
	}

  deleteProduct(user):Observable<any>{
	  return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  

  listProductAll(user):Observable<any>{
	  return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }

  detailProduct(user):Observable<any>{
    return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
  post(user):Observable<any>{
    return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
  
  /*
  session(path, user):Observable<any>{
    return this.http.post(`${this.url}${path.path}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  */
  

}
