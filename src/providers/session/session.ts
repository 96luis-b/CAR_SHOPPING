import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../service/service.service';
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

	url;

  constructor(public http: HttpClient,
			  public service: Service) {
    console.log('Hello SessionProvider Provider');
		console.log(this.service.url);
		this.url = this.service.url;
  }

  login(user):Observable<any>{
    return this.http.post(`${this.url}Login`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  signUp(user):Observable<any>{
    return this.http.post(`${this.url}SignUp`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
}
