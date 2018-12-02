import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../service/service.service';
/*
  Generated class for the CarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarProvider {
	
	url;

	
  constructor(public http: HttpClient,
			  public service: Service) {
    console.log('Hello CarProvider Provider');
	console.log(this.service.url);
		this.url = this.service.url;
  }
  
  
  toBuy(car):Observable<any>{
    return this.http.post(`${this.url}Car`, {car}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  
}
