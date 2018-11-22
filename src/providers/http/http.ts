import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  //url = "http://localhost:8080/SHOPPING_CAR/"; 
  url = "http://192.168.43.92:8080/SHOPPING_CAR/"; 
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
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
  
  
  
  /*
  session(path, user):Observable<any>{
    return this.http.post(`${this.url}${path.path}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  */
  

}
