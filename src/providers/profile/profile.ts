import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../service/service.service';
/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

	url;

  constructor(public http: HttpClient,
			  public service: Service) {
    console.log('Hello ProfileProvider Provider');
	console.log(this.service.url);
	this.url = this.service.url;
  }
  
  getDataUserProfile(user):Observable<any>{
    return this.http.post(`${this.url}GetDataUserProfile`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  updateUserProfile(user):Observable<any>{
	console.log(user)
	  return this.http.post(`${this.url}UpdateProfile`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});	
  }
  
  deleteUserProfile(user):Observable<any>{
	  return this.http.post(`${this.url}DeleteUserProfile`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

}
